'use server';
/**
 * @fileOverview An AI agent that suggests focused questions or sub-topics for a study session.
 *
 * - generateFocusQuestions - A function that handles the generation of focus questions.
 * - GenerateFocusQuestionsInput - The input type for the generateFocusQuestions function.
 * - GenerateFocusQuestionsOutput - The return type for the generateFocusQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFocusQuestionsInputSchema = z.object({
  subject: z
    .string()
    .describe(
      'The subject for which to generate focused questions or sub-topics.'
    ),
});
export type GenerateFocusQuestionsInput = z.infer<
  typeof GenerateFocusQuestionsInputSchema
>;

const GenerateFocusQuestionsOutputSchema = z.object({
  focusedQuestions: z
    .array(z.string())
    .describe('A list of focused questions or sub-topics.'),
});
export type GenerateFocusQuestionsOutput = z.infer<
  typeof GenerateFocusQuestionsOutputSchema
>;

export async function generateFocusQuestions(
  input: GenerateFocusQuestionsInput
): Promise<GenerateFocusQuestionsOutput> {
  return generateFocusQuestionsFlow(input);
}

const generateFocusQuestionsPrompt = ai.definePrompt({
  name: 'generateFocusQuestionsPrompt',
  input: {schema: GenerateFocusQuestionsInputSchema},
  output: {schema: GenerateFocusQuestionsOutputSchema},
  prompt: `You are an AI assistant specialized in generating focused study questions.

Based on the provided subject, generate a list of 5-7 focused questions or sub-topics that a student can use to guide their study session.
These questions should help a student quickly start studying with clear guidance and improve their focus.

Subject: {{{subject}}}`,
});

const generateFocusQuestionsFlow = ai.defineFlow(
  {
    name: 'generateFocusQuestionsFlow',
    inputSchema: GenerateFocusQuestionsInputSchema,
    outputSchema: GenerateFocusQuestionsOutputSchema,
  },
  async (input) => {
    const {output} = await generateFocusQuestionsPrompt(input);
    return output!;
  }
);
