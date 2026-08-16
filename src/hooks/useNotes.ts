import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    fetchNotes,
    createNote,
    deleteNote,
    type CreateNoteInput,
} from '../services/noteService';
import type { NoteTag } from '../types/note';

export function useNotes(search: string = '', page: number = 1, tag?: NoteTag) {
    return useQuery({
        queryKey: ['notes', search, page, tag],
        queryFn: () => fetchNotes(search, page, tag),
    });
}

export function useCreateNote() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (newNote: CreateNoteInput) => createNote(newNote),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['notes'] });
        },
    });
}

export function useDeleteNote() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (noteId: number) => deleteNote(noteId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['notes'] });
        },
    });
}
