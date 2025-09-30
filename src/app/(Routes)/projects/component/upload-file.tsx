import React, { useState, useRef } from "react";
import { Upload, X, File, FileText, Image, CheckCircle2 } from "lucide-react";

// Type definitions
export interface UploadedFile {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  preview: string | null;
  uploaded: boolean;
}

interface FileUploadComponentProps {
  onFilesChange?: (files: UploadedFile[]) => void;
  maxFileSize?: number; // in MB
  acceptedFileTypes?: string[];
  maxFiles?: number;
}

export default function FileUploadComponent({
  onFilesChange,
  maxFileSize = 10,
  acceptedFileTypes = [
    "image/*",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ],
  maxFiles,
}: FileUploadComponentProps) {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Update parent component when files change
  const updateFiles = (newFiles: UploadedFile[]) => {
    setFiles(newFiles);
    if (onFilesChange) {
      onFilesChange(newFiles);
    }
  };

  // Handle file selection
  const handleFileSelect = (selectedFiles: FileList) => {
    const fileArray = Array.from(selectedFiles);

    // Check max files limit
    if (maxFiles && files.length + fileArray.length > maxFiles) {
      alert(`You can only upload a maximum of ${maxFiles} files`);
      return;
    }

    // Filter files by size and type
    const validFiles = fileArray.filter((file) => {
      const isValidSize = file.size <= maxFileSize * 1024 * 1024;
      const isValidType = acceptedFileTypes.some((type) => {
        if (type.endsWith("/*")) {
          const baseType = type.split("/")[0];
          return file.type.startsWith(baseType + "/");
        }
        return file.type === type;
      });

      if (!isValidSize) {
        alert(`File "${file.name}" exceeds ${maxFileSize}MB limit`);
      }
      if (!isValidType) {
        alert(`File "${file.name}" type is not supported`);
      }

      return isValidSize && isValidType;
    });

    // Add new files with preview URLs for images
    const newFiles: UploadedFile[] = validFiles.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      name: file.name,
      size: file.size,
      type: file.type,
      preview: file.type.startsWith("image/")
        ? URL.createObjectURL(file)
        : null,
      uploaded: false,
    }));

    const updatedFiles = [...files, ...newFiles];
    updateFiles(updatedFiles);

    // Simulate upload for demo (mark as uploaded after delay)
    newFiles.forEach((fileObj) => {
      setTimeout(() => {
        setFiles((prev) => {
          const updated = prev.map((f) =>
            f.id === fileObj.id ? { ...f, uploaded: true } : f
          );
          if (onFilesChange) {
            onFilesChange(updated);
          }
          return updated;
        });
      }, 1500);
    });
  };

  // Handle drag events
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      handleFileSelect(droppedFiles);
    }
  };

  // Handle file input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelect(e.target.files);
    }
  };

  // Remove file
  const removeFile = (fileId: string) => {
    const updatedFiles = files.filter((f) => {
      if (f.id === fileId) {
        if (f.preview) {
          URL.revokeObjectURL(f.preview);
        }
        return false;
      }
      return true;
    });
    updateFiles(updatedFiles);
  };

  // Format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  // Get file icon
  const getFileIcon = (type: string) => {
    if (type.startsWith("image/")) return <Image className="w-5 h-5" />;
    if (type === "application/pdf") return <FileText className="w-5 h-5" />;
    return <File className="w-5 h-5" />;
  };

  return (
    <div className="w-full">
      {/* Upload Area */}
      <div
        className={`relative border-2 border-dashed border-gray-text rounded-2xl transition-all duration-300
          `}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="p-8 sm:p-12 md:p-16 grid gap-3 text-center">
          <div className="mb-6 flex justify-center">
            <Upload
              className={`w-7 h-7 transition-colors duration-300 text-gray-text`}
            />
          </div>

          <h3 className="text-base">
            Drop your files here, or click to browse
          </h3>
          <p className="text-sm text-gray-text">
            Supports PDF, DOC, DOCX, Images (PNG, JPG, GIF) Up to {maxFileSize}
            MB
          </p>

          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-6 py-3 rounded-full transform hover:scale-105 active:scale-95 bg-dark-border-gray w-fit mx-auto"
          >
            Upload File
          </button>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept={acceptedFileTypes.join(",")}
            onChange={handleInputChange}
            className="hidden"
          />
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-8 space-y-3">
          <h4 className="text-lg font-semibold text-white mb-4">
            Uploaded Files ({files.length})
          </h4>

          {files.map((fileObj) => (
            <div
              key={fileObj.id}
              className="backdrop-blur-sm rounded-[8px] p-4 border border-dark-border-gray hover:border-gray-600 transition-all duration-200 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {fileObj.preview ? (
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-700">
                      <img
                        src={fileObj.preview}
                        alt={fileObj.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-lg bg-gray-700/50 flex items-center justify-center text-gray-400">
                      {getFileIcon(fileObj.type)}
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex-1 min-w-0">
                      <h5 className="text-white font-medium truncate text-sm sm:text-base">
                        {fileObj.name}
                      </h5>
                      <p className="text-gray-400 text-xs sm:text-sm mt-1">
                        {formatFileSize(fileObj.size)}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      {fileObj.uploaded ? (
                        <button
                          onClick={() => removeFile(fileObj.id)}
                          className="p-1.5 rounded-lg bg-gray-700/50 hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition-all duration-200 opacity-0 group-hover:opacity-100"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      ) : (
                        <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                      )}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {!fileObj.uploaded && (
                    <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full animate-pulse"
                        style={{ width: "60%" }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {files.length === 0 && (
        <div className="mt-8 text-center">
          <p className="text-gray-text text-sm">
            No files uploaded yet. Drag and drop or click to upload files.
          </p>
        </div>
      )}
    </div>
  );
}
