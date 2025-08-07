import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  filename: string;
  folder: string;
  width: number;
  height: number;
  className?: string;
  alt?: string;
}

export function ImagePlaceholder({
  filename,
  folder,
  width,
  height,
  className,
  alt
}: ImagePlaceholderProps) {
  return (
    <div 
      className={cn(
        "bg-muted border-2 border-dashed border-muted-foreground/25 rounded-lg flex flex-col items-center justify-center text-center p-4 min-h-[200px]",
        className
      )}
      style={{ aspectRatio: `${width}/${height}` }}
      role="img"
      aria-label={alt || `Placeholder for ${filename}`}
    >
      <ImageIcon className="h-12 w-12 text-muted-foreground/50 mb-4" />
      <div className="space-y-2">
        <div className="font-medium text-sm text-muted-foreground">
          Image Placeholder
        </div>
        <div className="text-xs text-muted-foreground/75 space-y-1">
          <div><strong>File:</strong> {filename}</div>
          <div><strong>Path:</strong> {folder}</div>
          <div><strong>Size:</strong> {width}×{height}px</div>
        </div>
      </div>
    </div>
  );
}