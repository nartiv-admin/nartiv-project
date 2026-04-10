export default async function handler(req, res) {
    if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
          return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
          const response = await fetch('https://qppbykswuuimddkbizmp.supabase.co/rest/v1/candidates?select=count', {
                  headers: {
                            'apikey': process.env.SUPABASE_KEY,
                            'Authorization': `Bearer ${process.env.SUPABASE_KEY}`,
                            'Prefer': 'count=exact'
                  }
          });
          const timestamp = new Date().toISOString();
          console.log(`[keep-alive] Pinged at ${timestamp} - status ${response.status}`);
          res.status(200).json({ ok: true, pinged_at: timestamp });
    } catch (err) {
          res.status(500).json({ ok: false, error: err.message });
    }
}
