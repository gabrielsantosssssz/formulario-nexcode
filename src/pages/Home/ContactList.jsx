import { useEffect, useState } from "react";
import api from '../../services/api';
import './style2.css';
import Nexus from '../../assets/nexus_code.jpeg';

const ContactList = () => {
  const [contatos, setContatos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editId, setEditId] = useState(null); // ← agora usamos o ID
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: ""
  });

  useEffect(() => {
    async function carregarContatos() {
      try {
        const res = await api.get('/usuarios');
        const contatosConvertidos = res.data.map(c => ({
          id: c.id,
          nome: c.name,
          telefone: c.telefone,
          email: c.email
        }));
        setContatos(contatosConvertidos);
      } catch (err) {
        console.error("Erro ao carregar contatos:", err);
      }
    }

    carregarContatos();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredContacts = contatos.filter(contato =>
    contato.nome.toLowerCase().includes(searchTerm) ||
    contato.email.toLowerCase().includes(searchTerm)
  );

  const startEdit = (contato) => {
    setEditId(contato.id); // ← armazena o ID
    setFormData({
      nome: contato.nome,
      telefone: contato.telefone,
      email: contato.email
    });
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este contato?")) {
      try {
        await api.delete(`/usuarios/${id}`);
        setContatos(prev => prev.filter(c => c.id !== id));
        if (editId === id) setEditId(null);
      } catch (err) {
        console.error("Erro ao deletar contato:", err);
        alert("Erro ao deletar contato.");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/usuarios/${editId}`, {
        name: formData.nome,
        telefone: formData.telefone,
        email: formData.email
      });

      const updatedContacts = contatos.map(c =>
  c.id === editId ? {
    ...c,
    nome: formData.nome,
    telefone: formData.telefone,
    email: formData.email
  } : c
);

      setContatos(updatedContacts);
      setEditId(null);
      setFormData({ nome: "", telefone: "", email: "" });
      alert("Contato atualizado com sucesso!");
    } catch (err) {
      console.error("Erro ao atualizar contato:", err);
      alert("Erro ao atualizar contato.");
    }
  };

  return (
    <div className="container2">
      <h1>Contatos Cadastrados</h1>

      {/* Barra de busca */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar por nome ou e-mail..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Lista de contatos */}
      <div id="contactList">
        {filteredContacts.length === 0 ? (
          <p>Nenhum contato encontrado.</p>
        ) : (
          filteredContacts.map((contato) => (
            <div key={contato.id} className="contact">
              <div className="contact-info">
                <strong>{contato.nome}</strong><br />
                {contato.telefone}<br />
                {contato.email}
              </div>
              <div className="button-group">
                <button onClick={() => startEdit(contato)}>Editar</button>
                <button onClick={() => handleDelete(contato.id)}>Excluir</button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Formulário de edição */}
      {editId !== null && (
        <form onSubmit={handleSubmit}>
          <h2>Editar Contato</h2>
          <div className="form-group">
            <label htmlFor="editNome">Nome:</label>
            <input
              type="text"
              id="editNome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="editTelefone">Telefone:</label>
            <input
              type="text"
              id="editTelefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="editEmail">E-mail:</label>
            <input
              type="email"
              id="editEmail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Salvar Alterações</button>
        </form>
      )}
    </div>
  );
};

export default ContactList;
