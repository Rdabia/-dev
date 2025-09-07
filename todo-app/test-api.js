import fetch from 'node-fetch';

async function testAPI() {
  try {
    // Test user creation

    // Benzersiz kullanıcı adı ve email üret
    const unique = Date.now();
    const userResponse = await fetch('http://localhost:5432/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: `testuser_${unique}`,
        email: `test${unique}@example.com`,
        password: 'testpass123'
      })
    });

    const userData = await userResponse.json();
    console.log('User creation result:', userData);

    if (userData.id) {
      // Test todo creation
      const todoResponse = await fetch('http://localhost:5432/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Test Todo',
          description: 'This is a test todo',
          user_id: userData.id
        })
      });

      const todoData = await todoResponse.json();
      console.log('Todo creation result:', todoData);

      if (todoData.id) {
        // Test todo update
        const updateResponse = await fetch(`http://localhost:5432/api/todos/${todoData.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: 'Updated Todo',
            description: 'This is an updated todo',
            completed: true
          })
        });

        const updateData = await updateResponse.json();
        console.log('Todo update result:', updateData);
      }
    }

  } catch (error) {
    console.error('Test failed:', error.message);
  }
}

testAPI();