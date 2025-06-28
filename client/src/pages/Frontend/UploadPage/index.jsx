import React, { useRef, useState } from "react";
import testImg1 from '../../../assets/Images/test1.png'
import testImg2 from '../../../assets/Images/test2.jpg'
import testImg3 from '../../../assets/Images/test3.jpg'
import testImg4 from '../../../assets/Images/test4.jpg'
import { Upload, X, Loader2, Download } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function UploadPage() {
    const [image, setImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [processedUrl, setProcessedUrl] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef(null);

    // Called when user picks a File object
    const handleImageChange = file => {
        if (!file.type.startsWith("image/")) {
            return toast.error("Only images allowed");
        }
        setSelectedFile(file);
        setProcessedUrl(null);
        const reader = new FileReader();
        reader.onloadend = () => setImage(reader.result);
        reader.readAsDataURL(file);
    };

    // When user clicks a test image
    const handleTestImageClick = async src => {
        try {
            const res = await fetch(src);
            const blob = await res.blob();
            const name = src.split("/").pop();
            const file = new File([blob], name, { type: blob.type });
            // preview directly from imported src for crisp display
            setImage(src);
            setProcessedUrl(null);
            setSelectedFile(file);
        } catch (err) {
            console.error(err);
            toast.error("Failed to load test image");
        }
    };

    const handleRemoveBackground = async () => {
        if (!selectedFile) return toast.error("Select an image first");
        setLoading(true);

        const formData = new FormData();
        formData.append("image", selectedFile);

        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_LINK}/image/remove`,
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                    responseType: "blob",
                }
            );
            const blobUrl = URL.createObjectURL(data);
            setImage(blobUrl);
            setProcessedUrl(blobUrl);
            toast.success("Background removed!");
        } catch (err) {
            console.error(err);
            toast.error("Removal failed");
        } finally {
            setLoading(false);
        }
    };

    const handleClear = () => {
        if (processedUrl) URL.revokeObjectURL(processedUrl);
        setImage(null);
        setSelectedFile(null);
        setProcessedUrl(null);
    };

    return (
        <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-5 py-20">
            <div className="relative inline-block mb-12">
                <h1 className="w-full max-w-[500px] !text-[36px] font-extrabold text-center text-gray-800">
                    Remove background of your image instantly
                </h1>
                <span className="absolute -top-2 -right-5 animate-bounce">
                    <span className="block w-4 h-4 bg-blue-500 rounded-full animate-pulse" />
                </span>
            </div>

            <div className="w-full max-w-lg text-center space-y-6">
                {/* Upload area */}
                <div
                    onClick={() => fileInputRef.current.click()}
                    onDrop={e => {
                        e.preventDefault();
                        setIsDragging(false);
                        if (e.dataTransfer.files[0]) handleImageChange(e.dataTransfer.files[0]);
                    }}
                    onDragOver={e => (e.preventDefault(), setIsDragging(true))}
                    onDragLeave={() => setIsDragging(false)}
                    className={`
            relative flex flex-col items-center justify-center
            border border-dashed border-gray-200 rounded-2xl bg-white
            transition-all duration-300 ease-linear cursor-pointer hover:bg-blue-100
            ${isDragging
                            ? "border-blue-400 bg-blue-50 animate-pulse"
                            : "border-gray-300 hover:border-blue-100"}
            ${image ? "!border-blue-400 p-2" : "p-8"}
          `}
                >
                    {image ? (
                        <div className={`relative w-full ${loading ? "animate-pulse" : ""}`}>
                            <img
                                src={image}
                                alt="Preview"
                                className="mx-auto h-full max-h-[400px] rounded-xl shadow-lg transition-opacity duration-500 opacity-100"
                            />
                            <button
                                onClick={handleClear}
                                disabled={loading}
                                className="absolute top-2 right-2 bg-white p-1 cursor-pointer rounded-full shadow hover:bg-red-100 transition"
                                title="Clear"
                            >
                                <X className="w-5 h-5 text-red-500" />
                            </button>
                        </div>
                    ) : (
                        <>
                            <Upload className="h-12 w-12 text-gray-400 mb-4" />
                            <p className="text-lg text-gray-600">
                                Drag & drop an image<br />or click to select
                            </p>
                            <p className="mt-2 text-sm text-gray-400 italic">
                                JPG, PNG, WEBP (max 5MB)
                            </p>
                        </>
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={e =>
                            e.target.files && handleImageChange(e.target.files[0])
                        }
                    />
                </div>

                {!processedUrl && selectedFile && (
                    <button
                        onClick={handleRemoveBackground}
                        disabled={loading}
                        className={`
              inline-flex items-center justify-center px-6 py-3 mt-3
              bg-red-100 text-red-500 font-semibold rounded-lg cursor-pointer
              shadow hover:bg-[#ffd4d4] transition-colors duration-200 ease-linear
              ${loading ? "opacity-70 cursor-wait" : ""}
            `}
                    >
                        {loading && <Loader2 className="animate-spin h-5 w-5 mr-2" />}
                        {loading ? "Removing..." : "Remove Background"}
                    </button>
                )}

                {processedUrl && (
                    <a href={processedUrl} download="no-bg.png">
                        <button className="
              inline-flex items-center justify-center px-6 py-3 mt-3
              bg-[#23ca6b] text-white font-semibold rounded-lg cursor-pointer
              shadow hover:bg-[#23ca6bc4] transition-colors duration-200 ease-linear
            ">
                            <Download className="h-5 w-5 mr-2" />
                            Download PNG
                        </button>
                    </a>
                )}
            </div>

            <div className="flex flex-col justify-center items-center mt-20">
                <p className="text-[#666] font-semibold mb-2">Try one of these for free:</p>
                <div className="flex gap-2">
                    {[testImg1, testImg2, testImg3, testImg4].map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`example-${i}`}
                            className="w-14 h-14 object-cover rounded-lg cursor-pointer hover:opacity-75 transition"
                            onClick={() => handleTestImageClick(src)}
                        />
                    ))}
                </div>
            </div>

            <div>
                <p className="w-full max-w-[450px] !text-[12px] text-[#666] text-center mt-6">
                    By uploading an image or URL you agree to our <span className="text-blue-600 cursor-pointer hover:underline">Terms of Service</span>. This site is protected by reCaptcha and its <span className="text-blue-600 cursor-pointer hover:underline">Privacy Policy</span> and <span className="text-blue-600 cursor-pointer hover:underline">Terms of Service</span> apply.
                </p>
            </div>

            <ToastContainer position="top-center" autoClose={2000} />
        </div>
    );
}