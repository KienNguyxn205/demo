<div className="container mt-4" style={{ maxWidth: "400px" }}>
  <h1 className="mb-4 text-center fw-bold fs-3">Đăng ký tài khoản</h1>
  <form>
    {/* Email */}
    <div className="mb-3">
      <label htmlFor="email" className="form-label fw-bold">
        Email
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        placeholder="Nhập email"
      />
    </div>

    {/* Họ tên */}
    <div className="mb-3">
      <label htmlFor="name" className="form-label fw-bold">
        Họ và tên
      </label>
      <input
        type="text"
        className="form-control"
        id="name"
        placeholder="Nhập họ và tên"
      />
    </div>

    {/* Số điện thoại */}
    <div className="mb-3">
      <label htmlFor="phone" className="form-label fw-bold">
        Số điện thoại
      </label>
      <input
        type="tel"
        className="form-control"
        id="phone"
        placeholder="Nhập số điện thoại"
      />
    </div>

    {/* Mật khẩu */}
    <div className="mb-3">
      <label htmlFor="password" className="form-label fw-bold">
        Mật khẩu
      </label>
      <input
        type="password"
        className="form-control"
        id="password"
        placeholder="Nhập mật khẩu"
      />
    </div>

    {/* Nút đăng ký */}
    <div className="text-center">
      <button type="submit" className="btn btn-success px-4 py-2 w-100">
        Đăng ký
      </button>
    </div>
  </form>
</div>
