"use client";
import React, { useState } from "react";

export default function ProductsPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          description,
          price: parseFloat(price), // Convertimos el string a número para Prisma
        }),
      });

      if (response.ok) {
        alert("¡Producto creado con éxito!");
        setName("");
        setPrice("");
        setDescription("");
      } else {
        console.error(response);
        alert(`Error al insertar`);
      }
    } catch (error) {
      console.error("Error al enviar:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-b from-[#599ee4] to-[#0565c5] h-screen w-full">
      <div className="flex flex-col gap-4 h-2/3  w-2/3 bg-[#ebe0e0]  border-2 rounded-lg items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center justify-center"
        >
          <h2 className="text-xl font-bold mb-4">Nuevo Producto</h2>

          <div className="mb-3">
            <label className="block mb-1">Nombre:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded text-black"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block mb-1">Descripcion:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded text-black"
              required
            />
          </div>

          <div className="mb-3">
            <label className="block mb-1">Precio:</label>
            <input
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 border rounded text-black"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {loading ? "Guardando..." : "Guardar Producto"}
          </button>
        </form>
        <a href="/" className="text-blue-600 hover:text-blue-800">
          Ir al inicio
        </a>
      </div>
    </div>
  );
}
