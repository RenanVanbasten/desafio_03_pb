import styled from "styled-components";

export const NavBar = styled.div`
  .navbar-container {
    display: flex;
    justify-content: center;

    .navbar-content {
      height: 100px;
      width: 1440px;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: space-between;
      padding: 10px 50px;

      .logo {
        display: flex;
        gap: 5px;

        img {
          height: 34px;
          display: inline-block;
          vertical-align: middle;
        }

        h1 {
          font-weight: 700;
          font-size: 34px;
          line-height: 38px;
          font-family: "Montserrat", sans-serif;
        }
      }

      .nav-1 {
        display: flex;
        list-style: none;
        gap: 30px;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;

        li {
          a {
            text-decoration: none;
            color: inherit;
          }

          a:hover {
            color: #b5a1a1;
          }
        }
      }

      .nav-2 {
        display: flex;
        list-style: none;
        gap: 30px;
        padding-right: 45px;

        img {
          height: 20px;
          display: inline-block;
          vertical-align: middle;
        }
        li {
          a {
            text-decoration: none;
            color: inherit;
          }

          a:hover {
            img {
              filter: brightness(0) saturate(100%) invert(50%);
            }
          }
        }
      }
    }
  }
`;
