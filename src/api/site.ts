import { request } from '@/api/axios';
import { Event } from '@/types/Event';

export const getEvent = async (id: number): Promise<Event |false> => {
    const json = await request.get(`/events/${id}`);
    return json.data.event as Event ?? false;
}