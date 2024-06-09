import logo from "@/public/images/logo-white.svg";

const Template = ({ data }) => {
  const subTotal = data?.items?.reduce(
    (sum, item) => (item?.product_id?.price || 0) * item?.quantity + sum,
    0
  );
  const { firstName, lastName, city, address, country, phone, zip } =
    data?.shipping || {};
  const tax = subTotal * 0.05;
  const total = subTotal + tax;
  const date = new Date(data?.createdAt).toLocaleDateString();

  return (
    <div style={{ width: "92%", maxWidth: "75%", margin: "auto" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "40px",
          backgroundColor: "white",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <img src="logo.png" alt="logo" />
            <h1
              style={{
                marginTop: "8px",
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "#1f2937",
              }}
            >
              LWSkart
            </h1>
          </div>
          <div style={{ textAlign: "end" }}>
            <h2
              style={{ fontSize: "2rem", fontWeight: "600", color: "#2d3748" }}
            >
              Invoice #
            </h2>
            <span
              style={{ marginTop: "4px", display: "block", color: "#6b7280" }}
            >
              {data._id.toString()}
            </span>
            <address
              style={{
                marginTop: "16px",
                fontStyle: "normal",
                color: "#2d3748",
              }}
            >
              H 106/2, North Badda,
              <br />
              Badda, Dhaka - 1212
              <br />
              Bangladesh
              <br />
            </address>
          </div>
        </div>
        <div
          style={{
            marginTop: "32px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                color: "#2d3748",
              }}
            >
              Bill to:
            </h3>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                color: "#2d3748",
              }}
            >
              {firstName} {lastName}
            </h3>
            <address style={{ marginTop: "8px", color: "#6b7280" }}>
              {address},<br />
              {city},{zip},<br />
              {country}
              <br />
            </address>
          </div>
          <div
            style={{
              textAlign: "end",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "12px",
              }}
            >
              <dl
                style={{
                  display: "grid",
                  gridTemplateColumns: "3fr 2fr",
                  gap: "12px",
                }}
              >
                <dt style={{ fontWeight: "600", color: "#2d3748" }}>
                  Invoice date:
                </dt>
                <dd style={{ color: "#6b7280" }}>{date}</dd>
              </dl>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "24px" }}>
          <div
            style={{
              border: "1px solid #e5e7eb",
              padding: "16px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "none",
                gridTemplateColumns: "2fr 1fr 1fr 1fr",
              }}
            >
              <div
                style={{
                  gridColumn: "span 2",
                  fontSize: "0.75rem",
                  fontWeight: "500",
                  color: "#6b7280",
                  textTransform: "uppercase",
                }}
              >
                Item
              </div>
              <div
                style={{
                  textAlign: "start",
                  fontSize: "0.75rem",
                  fontWeight: "500",
                  color: "#6b7280",
                  textTransform: "uppercase",
                }}
              >
                Qty
              </div>
              <div
                style={{
                  textAlign: "start",
                  fontSize: "0.75rem",
                  fontWeight: "500",
                  color: "#6b7280",
                  textTransform: "uppercase",
                }}
              >
                Rate
              </div>
              <div
                style={{
                  textAlign: "end",
                  fontSize: "0.75rem",
                  fontWeight: "500",
                  color: "#6b7280",
                  textTransform: "uppercase",
                }}
              >
                Amount
              </div>
            </div>
            <div
              style={{ display: "none", borderBottom: "1px solid #e5e7eb" }}
            ></div>
            {data?.items?.map(({ _id, product_id, quantity }) => (
              <div
                key={_id.toString()}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "8px",
                }}
              >
                <div style={{ gridColumn: "span 2" }}>
                  <h5
                    style={{
                      display: "none",
                      fontSize: "0.75rem",
                      fontWeight: "500",
                      color: "#6b7280",
                      textTransform: "uppercase",
                    }}
                  >
                    Item
                  </h5>
                  <p style={{ fontWeight: "500", color: "#2d3748" }}>
                    {product_id?.name}
                  </p>
                </div>
                <div>
                  <h5
                    style={{
                      display: "none",
                      fontSize: "0.75rem",
                      fontWeight: "500",
                      color: "#6b7280",
                      textTransform: "uppercase",
                    }}
                  >
                    Qty
                  </h5>
                  <p style={{ color: "#2d3748" }}>{quantity}</p>
                </div>
                <div>
                  <h5
                    style={{
                      display: "none",
                      fontSize: "0.75rem",
                      fontWeight: "500",
                      color: "#6b7280",
                      textTransform: "uppercase",
                    }}
                  >
                    Rate
                  </h5>
                  <p style={{ color: "#2d3748" }}>
                    {product_id?.discount_price}
                  </p>
                </div>
                <div>
                  <h5
                    style={{
                      display: "none",
                      fontSize: "0.75rem",
                      fontWeight: "500",
                      color: "#6b7280",
                      textTransform: "uppercase",
                    }}
                  >
                    Amount
                  </h5>
                  <p style={{ textAlign: "end", color: "#2d3748" }}>
                    ${(product_id?.discount_price * quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            marginTop: "32px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "640px",
              textAlign: "end",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "3fr 2fr",
                gap: "12px",
              }}
            >
              <dl
                style={{
                  display: "grid",
                  gridTemplateColumns: "3fr 2fr",
                  gap: "12px",
                }}
              >
                <dt style={{ fontWeight: "600", color: "#2d3748" }}>
                  Subtotal:
                </dt>
                <dd style={{ color: "#6b7280" }}>${subTotal.toFixed(2)}</dd>
              </dl>
              <dl
                style={{
                  display: "grid",
                  gridTemplateColumns: "3fr 2fr",
                  gap: "12px",
                }}
              >
                <dt style={{ fontWeight: "600", color: "#2d3748" }}>Total:</dt>
                <dd style={{ color: "#6b7280" }}>${total.toFixed(2)}</dd>
              </dl>
              <dl
                style={{
                  display: "grid",
                  gridTemplateColumns: "3fr 2fr",
                  gap: "12px",
                }}
              >
                <dt style={{ fontWeight: "600", color: "#2d3748" }}>Tax:</dt>
                <dd style={{ color: "#6b7280" }}>${tax.toFixed(2)}</dd>
              </dl>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "32px" }}>
          <h4
            style={{
              fontSize: "1.125rem",
              fontWeight: "600",
              color: "#2d3748",
            }}
          >
            Thank you!
          </h4>
          <p style={{ color: "#6b7280" }}>
            If you have any questions concerning this invoice, use the following
            contact information:
          </p>
          <div style={{ marginTop: "8px" }}>
            <p
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#2d3748",
              }}
            >
              miremon5222@gmail.com
            </p>
            <p
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#2d3748",
              }}
            >
              +880 1741-235222
            </p>
          </div>
        </div>
        <p
          style={{ marginTop: "20px", fontSize: "0.875rem", color: "#6b7280" }}
        >
          © 2024 LWSkart.
        </p>
      </div>
    </div>
  );
};

export default Template;
