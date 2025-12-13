export type View = 'calculator' | 'drugs' | 'guidelines' | 'instructions';

export interface Drug {
  id: string;
  genericName: string;
  brandNames: string[];
  category: string;
  categoryAr: string;
  descriptionEn: string;
  descriptionAr: string;
  doseEn?: string;
  doseAr?: string;
  warningsEn?: string[];
  warningsAr?: string[];
}

export interface Guideline {
  id: string;
  titleEn: string;
  titleAr: string;
  category: 'Restorative' | 'Endodontics' | 'Prosthodontics' | 'Surgery' | 'Pediatrics';
  contentEn: string[];
  contentAr: string[];
}

export interface PatientInstruction {
  id: string;
  procedureEn: string;
  procedureAr: string;
  nutritionEn: string[];
  nutritionAr: string[];
  tipsEn: string[];
  tipsAr: string[];
  precautionsEn: string[];
  precautionsAr: string[];
}

export interface CalculatorResult {
  maxCartridges?: number;
  maxDoseMg?: number;
  warning?: string;
}

export interface ComparisonRow {
  aspectEn: string;
  aspectAr: string;
  valA_En: string;
  valA_Ar: string;
  valB_En: string;
  valB_Ar: string;
}
