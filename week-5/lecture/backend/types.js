const zod = require('zod');
const createTodo = zod.object({
//   id: zod.string().uuid(),
  title: zod.string().min(1, 'Title is required'),
  description: zod.string().optional(),
  completed: zod.boolean().default(false),
});

const updateTodo = zod.object({
  id: zod.string(),
  completed: zod.boolean().optional(),
  title: zod.string().optional(),
  description: zod.string().optional()
});

module.exports = {
  createTodo,
  updateTodo,
};