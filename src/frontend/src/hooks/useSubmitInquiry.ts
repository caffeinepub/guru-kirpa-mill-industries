import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface InquiryData {
  email: string;
  subject: string;
  message: string;
}

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: InquiryData) => {
      if (!actor) {
        throw new Error('Actor not available');
      }
      await actor.submitInquiry(data.email, data.subject, data.message);
    },
    onSuccess: () => {
      // Invalidate any inquiry-related queries if needed
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
}
