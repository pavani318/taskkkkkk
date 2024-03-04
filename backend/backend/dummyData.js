const dummyData = [
    { 
        customer_name: 'John Doe', 
        age: 30, 
        phone: '123-456-7890', 
        location: 'New York',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Sophie Taylor', 
        age: 22, 
        phone: '123-234-3456', 
        location: 'Chicago',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Jake Brown', 
        age: 39, 
        phone: '234-345-4567', 
        location: 'Los Angeles',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    // Add all other customer records here...
    { 
        customer_name: 'Sophie Brown', 
        age: 37, 
        phone: '234-345-4567', 
        location: 'Los Angeles',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Jacob Johnson', 
        age: 26, 
        phone: '345-456-5678', 
        location: 'New York',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    // Add the rest of the customer records here...
    { 
        customer_name: 'Emily Davis', 
        age: 45, 
        phone: '456-567-6789', 
        location: 'Houston',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Olivia Wilson', 
        age: 24, 
        phone: '567-678-7890', 
        location: 'Miami',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Noah Lee', 
        age: 43, 
        phone: '678-789-8901', 
        location: 'San Francisco',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Ava Garcia', 
        age: 27, 
        phone: '789-890-9012', 
        location: 'Seattle',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'William Rodriguez', 
        age: 32, 
        phone: '890-901-0123', 
        location: 'Dallas',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Emily Martinez', 
        age: 29, 
        phone: '901-012-1234', 
        location: 'Phoenix',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Ethan Lopez', 
        age: 41, 
        phone: '012-123-2345', 
        location: 'Philadelphia',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Sophia Nguyen', 
        age: 28, 
        phone: '123-234-3456', 
        location: 'Denver',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'James Clark', 
        age: 39, 
        phone: '234-345-4567', 
        location: 'Las Vegas',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Emma Perez', 
        age: 26, 
        phone: '345-456-5678', 
        location: 'Orlando',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Matthew Hernandez', 
        age: 43, 
        phone: '456-567-6789', 
        location: 'Austin',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Oliver King', 
        age: 30, 
        phone: '567-678-7890', 
        location: 'Portland',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Charlotte Adams', 
        age: 37, 
        phone: '678-789-8901', 
        location: 'San Diego',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Lucas Wright', 
        age: 25, 
        phone: '789-890-9012', 
        location: 'Washington, D.C.',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Amelia Hall', 
        age: 44, 
        phone: '890-901-0123', 
        location: 'San Antonio',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Daniel Young', 
        age: 31, 
        phone: '901-012-1234', 
        location: 'Atlanta',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Madison Baker', 
        age: 36, 
        phone: '012-123-2345', 
        location: 'Boston',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Henry Taylor', 
        age: 28, 
        phone: '123-234-3456', 
        location: 'Chicago',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Sophie Brown', 
        age: 37, 
        phone: '234-345-4567', 
        location: 'Los Angeles',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Jacob Johnson', 
        age: 26, 
        phone: '345-456-5678', 
        location: 'New York',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Emily Davis', 
        age: 45, 
        phone: '456-567-6789', 
        location: 'Houston',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Olivia Wilson', 
        age: 24, 
        phone: '567-678-7890', 
        location: 'Miami',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Noah Lee', 
        age: 43, 
        phone: '678-789-8901', 
        location: 'San Francisco',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Ava Garcia', 
        age: 27, 
        phone: '789-890-9012', 
        location: 'Seattle',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'William Rodriguez', 
        age: 32, 
        phone: '890-901-0123', 
        location: 'Dallas',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Emily Martinez', 
        age: 29, 
        phone: '901-012-1234', 
        location: 'Phoenix',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
    { 
        customer_name: 'Ethan Lopez', 
        age: 41, 
        phone: '012-123-2345', 
        location: 'Philadelphia',
        created_at_date: '2024-03-03',
        created_at_time: '2024-03-03 12:29:17.969574'
    },
];

