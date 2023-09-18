import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

async function getTasks() {
  try {
    const response = await axios.get(`${URL}/tasks`);
    return response.data;
  } catch (error) {
    console.error("Erro ao listar tarefas:", error);
  }
}

async function createTask(task) {
  try {
    const response = await axios.post(`${URL}/tasks`, task);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar tarefa:", error);
  }
}

async function updateTask(taskId, updatedTask) {
  try {
    const response = await axios.put(`${URL}/tasks/${taskId}`, updatedTask);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar tarefa ${taskId}:`, error);
  }
}

async function toggleTaskChecked(taskId, checked) {
  try {
    const response = await axios.patch(`${URL}/tasks/${taskId}/checked`, {
      checked,
    });
    return response.data;
  } catch (error) {
    console.error(
      `Erro ao marcar/desmarcar tarefa ${taskId} como concluída:`,
      error
    );
  }
}

async function deleteTask(taskId) {
  try {
    await axios.delete(`${URL}/tasks/${taskId}`);
  } catch (error) {
    console.error(`Erro ao excluir tarefa ${taskId}:`, error);
  }
}

export { getTasks, createTask, updateTask, toggleTaskChecked, deleteTask };
