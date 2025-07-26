import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="🔍 Search recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '0.5rem',
          width: '100%',
          maxWidth: '300px',
          borderRadius: '6px',
          border: '1px solid #ccc',
        }}
      />
    </div>
  );
};

export default SearchBar;
