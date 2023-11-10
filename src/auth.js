export async function authenticateUser(credentials) {
    try {
      const response = await api.authenticateUser(credentials);
      if (response.status === 200) {
        const user = response.data; // Отримані дані аутентифікованого користувача
        return user; // Повертаємо дані аутентифікованого користувача
      } else {
        throw new Error('Аутентифікація не вдалася');
      }
    } catch (error) {
      console.error('Помилка аутентифікації:', error);
      throw error;
    }
  }