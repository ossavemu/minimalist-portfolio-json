import type { CV } from '../cv.d';
import { LANGUAGES } from '@/constants';
import type { Language } from '@/constants';

import esData from '../data/es.json';
import enData from '../data/en.json';

export function getCVData(language: Language): CV {
  return language === LANGUAGES.ES ? esData as CV : enData as CV;
}