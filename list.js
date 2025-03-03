<div className="container mt-4">
  {/* Tiêu đề + nút thêm mới */}
  <div className="d-flex justify-content-between align-items-center mb-3">
    <h1 className="fw-bold fs-4">Danh sách sản phẩm</h1>
    <Link className="btn btn-primary" to="">
      + Thêm mới
    </Link>
  </div>

  {/* Bảng sản phẩm */}
  <table className="table table-bordered table-striped table-hover text-center align-middle">
    <thead className="table-dark">
      <tr>
        <th scope="col">STT</th>
        <th scope="col">Tên sản phẩm</th>
        <th scope="col">Hình ảnh</th>
        <th scope="col">Giá bán</th>
        <th scope="col">Mô tả</th>
        <th scope="col">Danh mục</th>
        <th scope="col">Hành động</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>iPhone 13</td>
        <td>
          <img
            src="https://photo.znews.vn/w660/Uploaded/mdf_eioxrd/2021_07_06/2.jpg"
            width={90}
            className="rounded"
          />
        </td>
        <td>20,000,000đ</td>
        <td>Điện thoại Apple cao cấp</td>
        <td>Smartphones</td>
        <td>
          <button className="btn btn-danger mx-1">Xóa</button>
          <Link className="btn btn-warning mx-1" to="">
            Sửa
          </Link>
        </td>
      </tr>
    </tbody>
  </table>
</div>;
