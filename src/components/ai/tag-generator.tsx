"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { generatePortfolioTags, GeneratePortfolioTagsOutput } from "@/ai/flows/generate-portfolio-tags";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Copy } from "lucide-react";
import { Badge } from "../ui/badge";

export function TagGenerator() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<GeneratePortfolioTagsOutput | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setResult(null); // Reset result when a new file is chosen
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file || !preview) {
      toast({
        title: "No file selected",
        description: "Please select a file to generate tags.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const output = await generatePortfolioTags({ mediaDataUri: preview });
      setResult(output);
    } catch (error) {
      console.error("Error generating tags:", error);
      toast({
        title: "Generation Failed",
        description: "An error occurred while generating tags. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: "Copied to clipboard!" });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Media</CardTitle>
        <CardDescription>Select an image or video file from your device.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="media-upload">File</Label>
            <Input id="media-upload" type="file" accept="image/*,video/*" onChange={handleFileChange} />
          </div>

          {preview && (
            <div className="border rounded-md p-4">
              <p className="text-sm font-medium mb-2">Preview:</p>
              {file?.type.startsWith("image/") ? (
                <img src={preview} alt="Preview" className="max-w-full h-auto rounded-md" />
              ) : (
                <video src={preview} controls className="max-w-full h-auto rounded-md" />
              )}
            </div>
          )}

          <Button type="submit" disabled={isLoading || !file} className="w-full">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? "Generating..." : "Generate Tags & Description"}
          </Button>
        </form>

        {result && (
          <div className="mt-8 space-y-6 border-t pt-6">
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Generated Description</h3>
                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(result.description)}>
                        <Copy className="h-4 w-4" />
                    </Button>
                </div>
                <p className="text-muted-foreground bg-secondary p-4 rounded-md">{result.description}</p>
            </div>
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Suggested Tags</h3>
                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard(result.tags.join(', '))}>
                        <Copy className="h-4 w-4" />
                    </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                {result.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">{tag}</Badge>
                ))}
                </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
