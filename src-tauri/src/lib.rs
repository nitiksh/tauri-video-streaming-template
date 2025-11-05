use axum::{
    body::Body,
    extract::Query,
    http::{header, StatusCode},
    response::IntoResponse,
    routing::get,
    serve, Router,
};
use serde::Deserialize;
use std::{fs::File, path::PathBuf};
use tokio::net::TcpListener;
use tokio_util::io::ReaderStream;

#[derive(Deserialize)]
struct VideoQuery {
    file: String,
}

async fn stream_video(Query(params): Query<VideoQuery>) -> impl IntoResponse {
    let file_path = PathBuf::from(&params.file);

    if !file_path.exists() {
        return (StatusCode::NOT_FOUND, "File not found").into_response();
    }

    match File::open(&file_path) {
        Ok(file) => {
            let stream = ReaderStream::new(tokio::fs::File::from_std(file));
            let body = Body::from_stream(stream);

            (
                StatusCode::OK,
                [
                    (header::CONTENT_TYPE, "video/mp4"),
                    (header::ACCEPT_RANGES, "bytes"),
                    (header::ACCESS_CONTROL_ALLOW_ORIGIN, "*"),
                ],
                body,
            )
                .into_response()
        }
        Err(_) => (StatusCode::INTERNAL_SERVER_ERROR, "Error opening video").into_response(),
    }
}

pub async fn start_video_server() {
    let app = Router::new().route("/", get(stream_video));
    let listener = TcpListener::bind("127.0.0.1:7878")
        .await
        .expect("Failed to bind address");

    println!("Video server running at http://127.0.0.1:7878");
    serve(listener, app).await.unwrap();
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|_app| {
            // 🚀 Launch streaming server properly inside Tauri's Tokio runtime
            tauri::async_runtime::spawn(start_video_server());
            Ok(())
        })
        .plugin(tauri_plugin_fs::init())
        .run(tauri::generate_context!())
        .expect("error while running Tauri app");
}
