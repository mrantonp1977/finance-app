import { useQuery } from "@tanstack/react-query";
import { client } from '@/lib/hono'

export const useGetAccounts = () => {
  const query = useQuery({
    queryKey: ['accounts'],
    queryFn: async () => {
      const response = await client.api.accounts.$get();

      if (!response.ok) {
        throw new Error('An error occurred while fetching the accounts');
      }

      const { data } = await response.json();
      return data;
    },     
  });
  return query;
};