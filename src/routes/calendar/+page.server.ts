import { supabase } from "$lib/supabaseClient";
import { fail } from '@sveltejs/kit';

export async function load() {
    const { data } = await supabase.from("exercises").select();
    return {
        exercises: data ?? [],
    };
}

export const actions = {
    add: async ({ request }) => {
        const data = await request.formData();
        const name = data.get('name') as string;
        const setsStr = data.get('sets') as string;
        const repsStr = data.get('reps') as string;

        if (!name || !setsStr || !repsStr) {
            return fail(400, { error: 'Invalid data' });
        }

        const sets = parseInt(setsStr);
        const reps = parseInt(repsStr);

        if (isNaN(sets) || isNaN(reps)) {
            return fail(400, { error: 'Invalid numbers' });
        }

        const { error } = await supabase.from('exercises').insert({ name, sets, reps });

        if (error) {
            return fail(500, { error: error.message });
        }

        return { success: true };
    },
    delete: async ({ request }) => {
        const data = await request.formData();
        const id = data.get('id') as string;

        if (!id) {
            return fail(400, { error: 'Invalid ID' });
        }

        const { error } = await supabase.from('exercises').delete().eq('id', id);

        if (error) {
            return fail(500, { error: error.message });
        }

        return { success: true };
    }
};