
/// <reference path="./pages/index.ts"/>
/// <reference path="./state.ts"/>
/// <reference path="./theme.ts"/>

namespace blank {

  const {
    MuiThemeProvider,
  } = material.core;

  const {
    Scaffold: ScaffoldDefault,
  } = form;

  const {
    DispatchProvider,
    connect,
  } = other.state;

  const {
    FetchProvider,
  } = other.fetch;

  const {
    SnackProvider,
  } = other.snack;

  const {
    DateProvider,
    TimeProvider,
  } = pickers;

  const {
    Router,
    Route,
  } = router;

  const {
    LooksOne,
    LooksTwo,
  } = material.icons;

  const {
    useRef,
  } = React;

  const Scaffold = connect(ScaffoldDefault);

  const {
    HomePage,
    LoginPage,
    RegisterPage,
  } = pages;

  const App = () => {
    const router = useRef(null);
    const pages = [
      { icon: LooksOne, title: "Login", click() { router.current("/login") } },
      { icon: LooksTwo, title: "Register", click() { router.current("/register") } },
    ];
    return (
      <MuiThemeProvider theme={theme}>
        <SnackProvider>
          <DateProvider>
            <TimeProvider>
              <DispatchProvider initialState={initialState} reducer={reducer}>
                <FetchProvider>
                  <Scaffold title="Blank app" pages={pages}>
                    <Router ref={router}>
                      <Route url="/" component={LoginPage} />
                      <Route url="/login" component={LoginPage} />
                      <Route url="/register" component={RegisterPage} />
                      <Route url="/home" component={HomePage} />
                    </Router>
                  </Scaffold>
                </FetchProvider>
              </DispatchProvider>
            </TimeProvider>
          </DateProvider>
        </SnackProvider>
      </MuiThemeProvider>
    );
  }

  export const main = () =>
    ReactDOM.render(<App />, document.querySelector('#mount-point'));

} // namespace blank
