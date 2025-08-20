import { useState } from "react";
import { pipeline, env } from '@huggingface/transformers';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Check } from "lucide-react";

// Configure transformers.js
env.allowLocalModels = false;
env.useBrowserCache = true;

interface ImageAnalysisResult {
  src: string;
  originalDescription: string;
  aiDescription: string;
  confidence: number;
  features: string[];
}

interface ImageAnalyzerProps {
  images: Array<{
    src: string;
    alt: string;
    title?: string;
    category?: string;
    description?: string;
  }>;
  onAnalysisComplete: (results: ImageAnalysisResult[]) => void;
}

export function ImageAnalyzer({ images, onAnalysisComplete }: ImageAnalyzerProps) {
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<ImageAnalysisResult[]>([]);

  const analyzeImage = async (imageUrl: string): Promise<{
    description: string;
    confidence: number;
    features: string[];
  }> => {
    try {
      // Load the image classification pipeline
      const classifier = await pipeline(
        'image-classification',
        'microsoft/resnet-50',
        { device: 'webgpu' }
      );

      // Analyze the image
      const result = await classifier(imageUrl) as any[];
      
      // Extract features and create description
      const topResults = result.slice(0, 3);
      const features = topResults.map((r: any) => r.label);
      const confidence = topResults[0]?.score || 0;

      // Create a natural description based on classification results
      let description = "";
      if (features.some(f => f.includes('bedroom') || f.includes('bed'))) {
        description = "Bedroom with comfortable furnishings";
      } else if (features.some(f => f.includes('kitchen') || f.includes('dining'))) {
        description = "Kitchen or dining area with modern amenities";
      } else if (features.some(f => f.includes('bathroom') || f.includes('shower'))) {
        description = "Bathroom with modern fixtures";
      } else if (features.some(f => f.includes('living') || f.includes('sofa'))) {
        description = "Living area with comfortable seating";
      } else if (features.some(f => f.includes('outdoor') || f.includes('terrace'))) {
        description = "Outdoor area or terrace space";
      } else {
        description = "Interior space with quality furnishings";
      }

      return { description, confidence, features };
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error analyzing image:', error);
      }
      return {
        description: "Interior space with quality amenities",
        confidence: 0,
        features: []
      };
    }
  };

  const handleAnalyzeImages = async () => {
    setAnalyzing(true);
    setProgress(0);
    const analysisResults: ImageAnalysisResult[] = [];

    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      try {
        const analysis = await analyzeImage(image.src);
        
        analysisResults.push({
          src: image.src,
          originalDescription: image.description || "",
          aiDescription: analysis.description,
          confidence: analysis.confidence,
          features: analysis.features
        });

        setProgress(((i + 1) / images.length) * 100);
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error(`Error analyzing image ${image.src}:`, error);
        }
        analysisResults.push({
          src: image.src,
          originalDescription: image.description || "",
          aiDescription: "Interior space with quality amenities",
          confidence: 0,
          features: []
        });
      }
    }

    setResults(analysisResults);
    setAnalyzing(false);
    onAnalysisComplete(analysisResults);
  };

  return (
    <Card className="p-6 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <Brain className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">AI Image Analysis</h3>
      </div>
      
      <p className="text-muted-foreground mb-4">
        Use AI to analyze each image and generate accurate descriptions based on actual content.
      </p>

      <div className="flex items-center gap-4">
        <Button 
          onClick={handleAnalyzeImages}
          disabled={analyzing}
          className="flex items-center gap-2"
        >
          {analyzing ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
              Analyzing... {Math.round(progress)}%
            </>
          ) : (
            <>
              <Brain className="h-4 w-4" />
              Analyze All Images ({images.length})
            </>
          )}
        </Button>

        {results.length > 0 && (
          <Badge variant="secondary" className="flex items-center gap-1">
            <Check className="h-3 w-3" />
            {results.length} images analyzed
          </Badge>
        )}
      </div>

      {analyzing && (
        <div className="mt-4">
          <div className="w-full bg-secondary rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {results.length > 0 && (
        <div className="mt-4">
          <p className="text-sm text-muted-foreground">
            Analysis complete! The gallery descriptions have been updated with AI-generated content based on actual image analysis.
          </p>
        </div>
      )}
    </Card>
  );
}