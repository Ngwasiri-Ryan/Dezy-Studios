'use server';

/**
 * @fileOverview An AI agent for generating portfolio tags and descriptions based on uploaded media.
 *
 * - generatePortfolioTags - A function that handles the generation of portfolio tags and descriptions.
 * - GeneratePortfolioTagsInput - The input type for the generatePortfolioTags function.
 * - GeneratePortfolioTagsOutput - The return type for the generatePortfolioTags function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePortfolioTagsInputSchema = z.object({
  mediaDataUri: z
    .string()
    .describe(
      "A media file (image or video) as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GeneratePortfolioTagsInput = z.infer<typeof GeneratePortfolioTagsInputSchema>;

const GeneratePortfolioTagsOutputSchema = z.object({
  tags: z.array(z.string()).describe('An array of relevant tags for the media.'),
  description: z.string().describe('A concise description of the media.'),
});
export type GeneratePortfolioTagsOutput = z.infer<typeof GeneratePortfolioTagsOutputSchema>;

export async function generatePortfolioTags(input: GeneratePortfolioTagsInput): Promise<GeneratePortfolioTagsOutput> {
  return generatePortfolioTagsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePortfolioTagsPrompt',
  input: {schema: GeneratePortfolioTagsInputSchema},
  output: {schema: GeneratePortfolioTagsOutputSchema},
  prompt: `You are an AI assistant that specializes in generating tags and descriptions for portfolio items.

  Analyze the provided media and suggest relevant tags and a concise description.

  Media: {{media url=mediaDataUri}}

  The tags should be relevant to the content of the media (objects, actions, scenes, etc.).
  The description should be a short and engaging summary of the media.
  Consider the type of media (photo, video) when suggesting tags and description.
`,
});

const generatePortfolioTagsFlow = ai.defineFlow(
  {
    name: 'generatePortfolioTagsFlow',
    inputSchema: GeneratePortfolioTagsInputSchema,
    outputSchema: GeneratePortfolioTagsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
