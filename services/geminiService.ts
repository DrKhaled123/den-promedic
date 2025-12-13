import { GoogleGenAI, Type } from "@google/genai";

// Initialize Gemini Client
// In a real app, ensure process.env.API_KEY is defined. 
// We use a fallback for safety in development if the env is missing, though the prompt implies it's injected.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const generateDentalSummary = async (notes: string): Promise<string> => {
  if (!apiKey) return "API Key missing. Please configure your environment.";
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are an expert dental assistant. Summarize the following clinical notes into a concise professional dental record format (SOAP format preferred if applicable).
      
      Notes: ${notes}`,
    });
    return response.text || "Could not generate summary.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error communicating with AI service.";
  }
};

export const analyzeTreatmentOptions = async (condition: string, patientHistory: string): Promise<string> => {
  if (!apiKey) return "API Key missing.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Patient Medical History: ${patientHistory}
      Current Dental Condition: ${condition}
      
      Suggest 3 potential treatment options with pros and cons for each, formatted as a clear list for a dentist to review.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster response on flash
      }
    });
    return response.text || "No options generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating treatment options.";
  }
};

export const generatePatientEmail = async (patientName: string, appointmentType: string, date: string): Promise<string> => {
    if (!apiKey) return "API Key missing.";

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Write a polite, professional appointment reminder email for a dental patient.
            Patient Name: ${patientName}
            Appointment Type: ${appointmentType}
            Date: ${date}
            
            Keep it warm but professional.`,
        });
        return response.text || "Could not generate email.";
    } catch (error) {
        return "Error generating email.";
    }
}
