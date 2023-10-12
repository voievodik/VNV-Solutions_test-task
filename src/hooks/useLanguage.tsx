import { useContext } from 'react';
import { LanguageContext } from '../store/LanguageContext';

export const useLanguage = () => {
  return useContext(LanguageContext);
}