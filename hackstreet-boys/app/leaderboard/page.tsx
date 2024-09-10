import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = createClient()
  const { data: leaderboard } = await supabase.from('leaderboard').select()

  return <pre>{JSON.stringify(leaderboard, null, 2)}</pre>
}