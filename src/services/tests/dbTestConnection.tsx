
import { useState } from 'react';
import { supabase } from '../supabase/client';

interface ConnectionTest {
  id: number;
  message: string;
  created_at: string;
}


// Componente desenvolvido exclusivamente para testar se a URL e API Key estavam funcionando.

function dbTestConnection() {
  const [records, setRecords] = useState<ConnectionTest[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function testConnection() {
    setLoading(true);
    setError(null);
    setRecords([]);

    const { data, error } = await supabase
      .from('connection_test')
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      setError(error.message);
      console.error('Erro Supabase:', error);
    } else {
      setRecords(data ?? []);
      console.log('Dados recebidos:', data);
    }

    setLoading(false);
  }

  return (
    <main style={{ padding: '32px', fontFamily: 'Arial' }}>
      <h1>Teste de conexão Supabase</h1>

      <button onClick={testConnection} disabled={loading}>
        {loading ? 'Consultando...' : 'Testar conexão'}
      </button>

      {error && (
        <p style={{ color: 'red' }}>
          Erro: {error}
        </p>
      )}

      {records.length > 0 && (
        <section>
          <h2>Registros recebidos:</h2>

          {records.map((record) => (
            <article key={record.id}>
              <p><strong>ID:</strong> {record.id}</p>
              <p><strong>Mensagem:</strong> {record.message}</p>
              <p><strong>Data:</strong> {record.created_at}</p>
              <hr />
            </article>
          ))}
        </section>
      )}

      {!loading && !error && records.length === 0 && (
        <p>Clique no botão para consultar o Supabase.</p>
      )}
    </main>
  );
}

export default dbTestConnection;
