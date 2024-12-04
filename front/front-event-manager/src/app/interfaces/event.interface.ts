export interface Event {
    id: string;
  name: string;
  type: string;
  description: string;
  maxParticipants: number;
  participantIds: string[];
  open: boolean;
  date: string;
  duration: number;
  location: string;
  organizerId: string;
  createdAt: string; 
  tags: string[];
}