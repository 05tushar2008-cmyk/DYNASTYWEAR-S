with open('js/ecommerce.js', 'a', encoding='utf-8') as f:
    f.write('''

// -- Admin Functions --
async function getAllOrders() {
    if (supabaseClient) {
        const { data, error } = await supabaseClient.from('orders').select('*').order('created_at', { ascending: false });
        if (!error && data) return data;
    }
    return [];
}

async function getAllProfiles() {
    if (supabaseClient) {
        const { data, error } = await supabaseClient.from('profiles').select('*').order('created_at', { ascending: false });
        if (!error && data) return data;
    }
    return [];
}
''')
