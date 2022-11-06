const DataSiswa = ({ nama, umur }) => {
  return (
    <>
      <h2>{nama}</h2>
      <h2>{umur}</h2>
    </>
  );
};

DataSiswa.propTypes = {
  nama: PropTypes.string,
  umur: PropTypes.number,

  // type data bebas
  nama: PropTypes.any.isRequired, //isRequired data harus ada
  // memberikan opsi untuk type data
  umur: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // type data array
  data: PropTypes.array,
  // mengecek value dari props
  data: PropTypes.arrayOf(PropTypes.number),
  // array dengan berbagai type data
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  // type data object
  info: PropTypes.object,
  // mengecek nilai dari object
  info: PropTypes.shape({
    hobby: PropTypes.string,
    class: PropTypes.number,
  }),
};
