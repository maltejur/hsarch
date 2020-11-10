<style>
  .wrapper {
    position: fixed;
    top: 0;
    height: 2em;
    background-color: #0000008c;
    width: calc(100% - 3em);
    z-index: 11;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5em;
    padding-left: 3em;
    transition: background-color 0.3s ease-in-out;
  }

  a {
    color: white;
    text-decoration: none;
  }

  h1 {
    font-family: "adobe-garamond-pro";
    font-weight: 400 !important;
    position: fixed;
    left: 50px;
    top: 9px;
  }

  nav {
    position: fixed;
    top: 33px;
    right: 110px;
    display: flex;
  }

  nav a {
    font-family: "adobe-garamond-pro";
    font-weight: 400 !important;
    font-size: 20px;
    margin-left: 15px;
    transition: transform 0.2s ease;
    transform: translateY(0);
  }

  nav a:hover {
    transform: translateY(-2px);
  }

  .welle-l {
    position: fixed;
    height: 30px;
    width: calc(100vw - 120px);
    top: 40px;
    left: 0;
  }

  .welle-r {
    position: fixed;
    height: 30px;
    width: 120px;
    top: 40px;
    right: 0;
  }
</style>

<div class="wrapper">
  <img src="./hertzlinie_l.svg" alt="" srcset="" class="welle-l" />
  <img src="./hertzlinie_r.svg" alt="" srcset="" class="welle-r" />
  <a href="/">
    <h1>HertzSCHLAG Archiv</h1>
  </a>
  <nav><a href="liste" style="margin-left: 25px">Alle Ausgaben</a></nav>
</div>
