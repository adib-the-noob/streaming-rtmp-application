## 🔴 **How Live Streaming Works:**

1️⃣ **Ingest Server:**  
The user uploads a video stream to the **Ingest Server**, which acts as the entry point for the live stream.

2️⃣ **Transcoding Queue:**  
The video is sent to a **transcoder queue** where multiple **Transcoding Servers** convert the video into different resolutions (e.g., **1080p**, **720p**, **480p**, **360p**) to ensure compatibility with various devices and network speeds.

3️⃣ **Segment Creation:**  
After transcoding, the video is split into **small segments** (e.g., **segment-0.ts**, **segment-1.ts**) to optimize playback.

4️⃣ **Storage in S3 Bucket:**  
Each segment is **uploaded to an S3 bucket**, making it ready for distribution.

5️⃣ **Global Distribution via CDN:**  
A **Content Delivery Network (CDN)** delivers these segments globally, ensuring viewers can watch the stream with minimal latency and buffering, adjusting the video quality based on their network speed.

In short, the system ensures **seamless live streaming** by dynamically adjusting video quality to match the viewer’s bandwidth. 🚀

![diagram-export-1-12-2025-7_32_00-PM](https://github.com/user-attachments/assets/d47467db-82fa-458e-83c2-3c9a499d0d1f)
