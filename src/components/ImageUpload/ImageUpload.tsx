import React, { useState } from "react";
import "./ImageUpload.css";
import { handleFileUpload } from "../../services";


interface ImageUploadProps {
  storage: string;
  onUpload: (url: string) => void;
}

const ImageUploader: React.FC<ImageUploadProps> = ({
  storage,
  onUpload,
  ...props
}) => {
  const [, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    console.log(file);
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      const url = (await handleFileUpload(file, storage, ".png")) || "";
      onUpload(url);
      return url;
    }
  };

  return (
    <div className="container">
      {preview && (
        <img
          src={preview}
          alt="Preview"
          style={{ width: "200px", borderRadius: 20, marginBottom: 20 }}
        />
      )}
      <input
        {...props}
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        capture="user"
      />
    </div>
  );
};

export { ImageUploader };
