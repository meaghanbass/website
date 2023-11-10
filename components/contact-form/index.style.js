import styled from "@emotion/styled";
import { remCalc, mediaQuery } from "../../utils";

const ContactFormContainer = styled.div`
  position: relative;

  .form-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
  }

  form {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;

    &:nth-of-type(1) {
      opacity: 0;
    }

    > div {
      &:nth-of-type(1) {
        /* display: none !important; */
      }
    }

    &.convo-form {
      opacity: 0;
    }

    &.outfunnel-form {
      position: absolute;
      top: ${remCalc(85)};
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: calc(100vh - ${remCalc(85)});

      #conversational-form {
        display: block;
        position: absolute;
        background: transparent;

        &::before {
          display: none;
        }

        cf-chat {
          .scrollableInner {
            width: 100%;
            margin: 0 auto;
          }
        }

        .conversational-form-inner {
          .cf-progressBar {
            background-color: transparent;

            .bar {
              background-color: #ffffff;
            }
          }

          cf-chat-response {
            &.robot {
              padding-left: 0;

              thumb {
                display: none;
              }

              text {
                p {
                  background: rgba(255, 255, 255, 0.1);
                  color: #ffffff;
                }
              }
            }

            &.user {
              padding-right: 0;

              thumb {
                display: none;
              }

              text {
                p {
                  background: rgba(74, 88, 81, 0.5);
                  color: #ffffff;
                }
              }
            }
          }

          cf-input {
            background: none;

            .inputWrapper {
              input {
                font-size: calc(22px + (36 - 22) * ((100vw - 300px) / (2000 - 300)));
                font-weight: 200;
                background: transparent;
                padding-left: 0;
                color: #ffffff;
                border-bottom: ${remCalc(1)} solid #ffffff;
                margin-top: ${remCalc(50)};

                &:hover {
                  opacity: 1;
                }
              }

              cf-input-button {
                background: transparent;
              }
            }
          }
        }
      }
    }

    .conversational-form * {
      cursor: auto;
      pointer-events: auto;
    }
  }
`;

export default ContactFormContainer;
