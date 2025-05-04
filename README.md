# Life game

To run enter
```bash
npm install
``` 

Then 
```bash
npm run dev
```

Matrix size and refresh interval can be set in config/config.ts

## Rules
### For a space that is populated:
Each cell with one or no neighbors dies, as if by solitude.

Each cell with four or more neighbors dies, as if by overpopulation.

Each cell with two or three neighbors survives.

### For a space that is empty or unpopulated:
Each cell with three neighbors becomes populated.