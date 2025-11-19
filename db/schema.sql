CREATE TABLE IF NOT EXISTS messageboard (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

INSERT INTO messageboard (username, message) 
VALUES
  ('BSizzle', 'heyooo' ),
  ('Odin', 'Today was the best day ever!'),
  ('Damon489', 'My dog just licked my face.');