import { Download, MoreVertical, Trash2, EyeIcon, EyeOffIcon, Heart } from "lucide-react";
import { toast } from 'react-toastify';
import React, { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { deleteImage, toggleVisibility } from "@/services/image.service";
import { downloadImage } from "@/utils/downloadImage";

const HistoryCard = ({ image, setImages }) => {

  const [isPrivate, setIsPrivate] = useState(image?.isPrivate);

  const handleDownload = (img, index) => {
    downloadImage(img, index);
    toast.success("Image downloaded successfully!");
  };

  const handleVisibility = async (imageId) => {
    try {
      const data = await toggleVisibility(imageId);
      toast.success(data.message);
      setIsPrivate(!isPrivate)
    } catch (error) {
      toast.error("Failed to update visibility");
    }
  };

  const handleDelete = async (imageId) => {
    const confirmed = window.confirm("Are you sure you want to delete this image?");

    if (!confirmed) return;

    try {
      const data = await deleteImage(imageId);
      toast.success(data.message);
      setImages((prev) => prev.filter((img) => img._id !== imageId));
    } catch (error) {
      toast.error("Failed to delete image");
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
  };


  return (
    <div className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0B1020] transition-all
        shadow-[0_0_40px_rgba(0,0,0,0.35)] duration-300 hover:border-violet-400/30 hover:shadow-[0_0_50px_rgba(139,92,246,0.12)]"
    >
      <div className="absolute z-20 top-2 right-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-1 text-white rounded-md hover:bg-white/10">
              <MoreVertical size={20} />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-fit bg-[#111827] border border-white/10 text-white"
          >
            <DropdownMenuItem onClick={() => handleVisibility(image._id)} >
              {(isPrivate) ? (
                <>
                  <EyeIcon className="w-4 h-4" />
                  Set as Public
                </>
              ) : (
                <>
                  <EyeOffIcon className="w-4 h-4" />
                  Set as Private
                </>
              )}
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => handleDelete(image._id)}
              className="text-red-400 focus:text-red-400"
            >
              <Trash2 className="w-4 h-4" />
              Delete Image
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="overflow-hidden aspect-square">
        <img src={image?.imageUrl} alt={image?.prompt || "generated image"}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-3 text-left">
        <h3 className=" text-[14px] font-semibold leading-snug text-white line-clamp-2">
          {image?.prompt || "Generated image"}
        </h3>

        <p className="my-2 text-[12px] font-medium text-gray-400 ">
          {image?.createdAt ? formatDate(image.createdAt) : "Unknown date"}
        </p>

        <div className="flex items-center gap-3">

          <button
            onClick={() => handleDownload(image.imageUrl, image._id)}
            className="flex-1 h-9 rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl 
            text-white font-medium flex items-center justify-center gap-2 transition-all duration-300
              hover:bg-white/[0.08] hover:border-violet-400/30"
          >
            <Download size={18} />
            Download
          </button>

          <button className="flex items-center justify-center text-red-400 transition-all duration-300 border w-11 h-9 rounded-2xl border-red-500/20 bg-red-500/5 hover:bg-red-500/10 hover:border-red-500/40"
          >
            <Heart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
