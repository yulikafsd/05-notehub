import axios from 'axios';
import type { NoteTag, Note } from '../types/note';

export interface FetchNotesResponse {
    notes: Note[];
    totalPages: number;
}

interface ApiErrorResponse {
    status_code?: number;
    status_message?: string;
    message?: string;
    success?: boolean;
}

export type CreateNoteInput = Omit<Note, 'id' | 'createdAt' | 'updatedAt'>;

const myToken = import.meta.env.VITE_NOTEHUB_TOKEN;

const notesClient = axios.create({
    baseURL: 'https://notehub-public.goit.study/api/notes',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${myToken}`,
    },
});

export async function fetchNotes(
    search: string,
    page: number = 1,
    tag?: NoteTag,
): Promise<FetchNotesResponse> {
    try {
        const { data } = await notesClient.get<FetchNotesResponse>('', {
            params: {
                search: search.trim() || undefined,
                page,
                tag: tag || undefined,
                perPage: 10,
                sortBy: 'created',
            },
        });

        return data;
    } catch (error) {
        if (axios.isAxiosError<ApiErrorResponse>(error)) {
            console.error(
                'Axios message:',
                error.response?.data?.message ||
                    error.response?.data?.status_message ||
                    error.message,
            );
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
}

export async function createNote(noteData: CreateNoteInput): Promise<Note> {
    const { data } = await notesClient.post<Note>('', noteData);
    return data;
}

export async function deleteNote(noteId: number): Promise<Note> {
    const { data } = await notesClient.delete<Note>(`/${noteId}`);
    return data;
}
