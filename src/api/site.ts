import { request } from '@/api/axios';
import { Event } from '@/types/Event';
import { SearchResult } from '@/types/SearchResult';

export const getEvent = async (id: number): Promise<Event |false> => {
    try {
        const json = await request.get(`/events/${id}`);
        return json.data.event as Event ?? false;
    } catch (error) {
        return false;
    }
}

export const searchCPF = async (eventId: number, cpf: string): Promise<SearchResult | false> => {
    try {
        const json = await request.get(`/events/${eventId}/search?cpf=${cpf}`);
        if (json.data.person && json.data.personMatched) {
            return json.data as SearchResult;
        } 
        return false;

    } catch (error) {
        return false;
    }
}