
import { useQuery } from '@tanstack/react-query';
import { PortfolioData } from '../types/portfolioTypes';

// Function to fetch portfolio data
const fetchPortfolioData = async (): Promise<PortfolioData> => {
  const response = await fetch('/webConfig.json');
  if (!response.ok) {
    throw new Error('Failed to fetch portfolio data');
  }
  return response.json();
};

// Hook to use portfolio data
export const usePortfolioData = () => {
  return useQuery({
    queryKey: ['portfolioData'],
    queryFn: fetchPortfolioData,
  });
};
