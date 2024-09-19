import React from "react";
import PlusIcon from "../Icons/PlusIcon";
import AutoIcon from "../Icons/AutoIcon";

const ProjectContent = () => {
  return (
    <>
      <div>
        <div className="px-4 ">
          <button
            type="button"
            className="flex h-8 cursor-pointer flex-row items-center bg-transparent text-cool-gray hover:text-light-gray focus:outline-none"
          >
            <span className="text-xs font-normal uppercase">Last Modified</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-px -translate-y-px"
              stroke="currentColor"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.99595 7L10.332 11.3266L14.668 7L16 8.33198L10.332 14L4.66397 8.33198L5.99595 7Z"
              ></path>
            </svg>
          </button>
        </div>

        <div className="hover:bg-[#1c1f21]">
          <div className="py-[14px] px-4 flex justify-between">
            <div className="flex ">
              <button
                type="button"
                className="h-[50px] w-[50px] mr-5 rounded-lg flex items-center justify-center text-light-gray bg-applight"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="#6a6b6f"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.73968 5.02905C8.59934 2.97793 11.4996 2.25 15.4875 2.25C16.3288 2.25 17.1211 2.28411 17.8585 2.35338C17.9065 2.35357 17.9534 2.35826 17.9988 2.36705C18.2217 2.38956 18.4394 2.41534 18.6518 2.44444C18.8078 2.46582 18.9532 2.53577 19.0672 2.6444L26.1547 9.3944C26.2699 9.50406 26.3472 9.64748 26.3755 9.80395C26.4165 10.0302 26.4537 10.2623 26.4875 10.5002C26.4908 10.5187 26.4934 10.5375 26.4953 10.5564C26.6604 11.7453 26.7375 13.0799 26.7375 14.5625C26.7375 18.9298 26.0876 22.0735 24.2458 24.1011C22.3843 26.1506 19.4806 26.875 15.4875 26.875C11.5003 26.875 8.5998 26.1505 6.7399 24.1009C4.89997 22.0733 4.25 18.9299 4.25 14.5625C4.25 10.2011 4.90009 7.05804 6.73968 5.02905ZM24.4932 9.88338L18.6055 4.27607V6.42963C18.6055 8.33762 20.1519 9.88338 22.0605 9.88338H24.4932ZM17.1055 3.79877V6.42963C17.1055 9.16663 19.3241 11.3834 22.0605 11.3834H25.0857C25.1875 12.3318 25.2375 13.3894 25.2375 14.5625C25.2375 18.8702 24.575 21.5078 23.1355 23.0926C21.7157 24.6556 19.3694 25.375 15.4875 25.375C11.6122 25.375 9.26895 24.6558 7.85072 23.0929C6.41253 21.508 5.75 18.8701 5.75 14.5625C5.75 10.2614 6.41241 7.62321 7.85094 6.03658C9.26941 4.47207 11.6129 3.75 15.4875 3.75C16.0563 3.75 16.5961 3.76638 17.1055 3.79877Z"
                  ></path>
                </svg>
              </button>
              <div>
                <p className="text-[17px] font-medium text-[#E5E5E5]">
                  Untitled
                </p>
                <div className="flex items-center flex-wrap mt-0.5 gap-1">
                  <button
                    type="button"
                    className="px-2 h-6 flex items-center justify-center gap-0.5 border border-dark-charcoal hover:border-slate-gray text-[#E5E5E5] rounded-full bg-[#1e1f23]"
                  >
                    <svg
                      className="text-[#E5E5E5]"
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="#E5E5E5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 8H14M3.33333 4H12.6667C13.403 4 14 4.59695 14 5.33333V14.6667C14 15.403 13.403 16 12.6667 16H3.33333C2.59695 16 2 15.403 2 14.6667V5.33333C2 4.59695 2.59695 4 3.33333 4Z"
                        stroke="#333333"
                        stroke-width="1.44689"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span>Due Date</span>
                  </button>
                  <button
                    type="button"
                    className="px-2 h-6 flex items-center justify-center gap-0.5 border border-dark-charcoal hover:border-slate-gray text-[#E5E5E5] rounded-full bg-[#1e1f23]"
                  >
                    <svg
                      width="14"
                      height="20"
                      viewBox="0 0 14 20"
                      fill="#E5E5E5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.6667 16V14.6667C12.6667 13.9594 12.3857 13.2811 11.8856 12.781C11.3855 12.281 10.7072 12 10 12H4.66667C3.95942 12 3.28115 12.281 2.78105 12.781C2.28095 13.2811 2 13.9594 2 14.6667V16M9.99935 6.66667C9.99935 8.13943 8.80544 9.33333 7.33268 9.33333C5.85992 9.33333 4.66602 8.13943 4.66602 6.66667C4.66602 5.19391 5.85992 4 7.33268 4C8.80544 4 9.99935 5.19391 9.99935 6.66667Z"
                        stroke="#333333"
                        stroke-width="1.44689"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span>Assign</span>
                  </button>
                  <button
                    type="button"
                    className="px-2 h-6 flex items-center justify-center gap-0.5 border border-dark-charcoal hover:border-slate-gray text-[#E5E5E5] rounded-full bg-[#1e1f23]"
                  >
                    <PlusIcon />
                    <span>Tag</span>
                  </button>
                  <button
                    type="button"
                    className="px-2 h-6 flex items-center justify-center gap-0.5 border border-dark-charcoal hover:border-slate-gray text-[#E5E5E5] rounded-full bg-[#1e1f23]"
                  >
                    <AutoIcon />
                    <span>Automate</span>
                  </button>
                  <span className="text-sm text-[#666666]">
                    28 minutes ago by ma6530028
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button className="size-10  flex items-center justify-center rounded-xl hover:bg-appcolor">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="#ff2d62"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.296 19.1674L13.3062 19.1641L13.3157 19.1593C13.399 19.1176 13.445 19.0717 13.5031 19.0135L13.5083 19.0083L20.4832 12.0334C20.6234 11.8932 20.6884 11.699 20.6884 11.5126C20.6884 11.3261 20.6234 11.1319 20.4832 10.9917C20.2035 10.7121 19.7375 10.7233 19.4384 11.0561L13.0028 17.4918L10.5586 15.0476C10.4183 14.9073 10.2242 14.8423 10.0377 14.8423C9.85125 14.8423 9.65707 14.9073 9.51684 15.0476C9.3766 15.1878 9.31159 15.382 9.31159 15.5684C9.31159 15.7549 9.3766 15.9491 9.51684 16.0893L12.4666 19.039C12.5883 19.1607 12.7134 19.1996 12.8435 19.2321L12.8614 19.2366H12.8799H12.8802H12.8806H12.881H12.8813H12.8817H12.882H12.8824H12.8827H12.8831H12.8835H12.8838H12.8842H12.8845H12.8849H12.8852H12.8856H12.8859H12.8863H12.8866H12.887H12.8873H12.8876H12.888H12.8883H12.8887H12.889H12.8894H12.8897H12.89H12.8904H12.8907H12.8911H12.8914H12.8917H12.8921H12.8924H12.8927H12.8931H12.8934H12.8937H12.8941H12.8944H12.8947H12.8951H12.8954H12.8957H12.8961H12.8964H12.8967H12.897H12.8974H12.8977H12.898H12.8983H12.8987H12.899H12.8993H12.8996H12.9H12.9003H12.9006H12.9009H12.9012H12.9016H12.9019H12.9022H12.9025H12.9028H12.9031H12.9034H12.9038H12.9041H12.9044H12.9047H12.905H12.9053H12.9056H12.9059H12.9063H12.9066H12.9069H12.9072H12.9075H12.9078H12.9081H12.9084H12.9087H12.909H12.9093H12.9096H12.9099H12.9102H12.9105H12.9108H12.9111H12.9114H12.9117H12.912H12.9123H12.9126H12.9129H12.9132H12.9135H12.9138H12.9141H12.9144H12.9147H12.915H12.9153H12.9155H12.9158H12.9161H12.9164H12.9167H12.917H12.9173H12.9176H12.9179H12.9181H12.9184H12.9187H12.919H12.9193H12.9196H12.9199H12.9201H12.9204H12.9207H12.921H12.9213H12.9215H12.9218H12.9221H12.9224H12.9227H12.9229H12.9232H12.9235H12.9238H12.924H12.9243H12.9246H12.9249H12.9251H12.9254H12.9257H12.9259H12.9262H12.9265H12.9268H12.927H12.9273H12.9276H12.9278H12.9281H12.9284H12.9286H12.9289H12.9292H12.9294H12.9297H12.93H12.9302H12.9305H12.9308H12.931H12.9313H12.9315H12.9318H12.9321H12.9323H12.9326H12.9328H12.9331H12.9334H12.9336H12.9339H12.9341H12.9344H12.9346H12.9349H12.9352H12.9354H12.9357H12.9359H12.9362H12.9364H12.9367H12.9369H12.9372H12.9374H12.9377H12.9379H12.9382H12.9384H12.9387H12.9389H12.9392H12.9394H12.9397H12.9399H12.9402H12.9404H12.9407H12.9409H12.9411H12.9414H12.9416H12.9419H12.9421H12.9424H12.9426H12.9428H12.9431H12.9433H12.9436H12.9438H12.944H12.9443H12.9445H12.9448H12.945H12.9452H12.9455H12.9457H12.9459H12.9462H12.9464H12.9467H12.9469H12.9471H12.9474H12.9476H12.9478H12.9481H12.9483H12.9485H12.9488H12.949H12.9492H12.9494H12.9497H12.9499H12.9501H12.9504H12.9506H12.9508H12.9511H12.9513H12.9515H12.9517H12.952H12.9522H12.9524H12.9526H12.9529H12.9531H12.9533H12.9535H12.9538H12.954H12.9542H12.9544H12.9547H12.9549H12.9551H12.9553H12.9555H12.9558H12.956H12.9562H12.9564H12.9566H12.9569H12.9571H12.9573H12.9575H12.9577H12.9579H12.9582H12.9584H12.9586H12.9588H12.959H12.9592H12.9595H12.9597H12.9599H12.9601H12.9603H12.9605H12.9607H12.961H12.9612H12.9614H12.9616H12.9618H12.962H12.9622H12.9624H12.9627H12.9629H12.9631H12.9633H12.9635H12.9637H12.9639H12.9641H12.9643H12.9645H12.9647H12.965H12.9652H12.9654H12.9656H12.9658H12.966H12.9662H12.9664H12.9666H12.9668H12.967H12.9672H12.9674H12.9676H12.9678H12.968H12.9682H12.9684H12.9686H12.9688H12.9691H12.9693H12.9695H12.9697H12.9699H12.9701H12.9703H12.9705H12.9707H12.9709H12.9711H12.9713H12.9715H12.9717H12.9719H12.9721H12.9723H12.9725H12.9727H12.9729H12.9731H12.9732H12.9734H12.9736H12.9738H12.974H12.9742H12.9744H12.9746H12.9748H12.975H12.9752H12.9754H12.9756H12.9758H12.976H12.9762H12.9764H12.9766H12.9768H12.977H12.9772H12.9773H12.9775H12.9777H12.9779H12.9781H12.9783H12.9785H12.9787H12.9789H12.9791H12.9793H12.9795H12.9797H12.9798H12.98H12.9802H12.9804H12.9806H12.9808H12.981H12.9812H12.9814H12.9816H12.9817H12.9819H12.9821H12.9823H12.9825H12.9827H12.9829H12.9831H12.9832H12.9834H12.9836H12.9838H12.984H12.9842H12.9844H12.9846H12.9847H12.9849H12.9851H12.9853H12.9855H12.9857H12.9859H12.9861H12.9862H12.9864H12.9866H12.9868H12.987H12.9872H12.9873H12.9875H12.9877H12.9879H12.9881H12.9883H12.9885H12.9886H12.9888H12.989H12.9892H12.9894H12.9896H12.9897H12.9899H12.9901H12.9903H12.9905H12.9907H12.9908H12.991H12.9912H12.9914H12.9916H12.9918H12.9919H12.9921H12.9923H12.9925H12.9927H12.9929H12.993H12.9932H12.9934H12.9936H12.9938H12.9939H12.9941H12.9943H12.9945H12.9947H12.9949H12.995H12.9952H12.9954H12.9956H12.9958H12.9959H12.9961H12.9963H12.9965H12.9967H12.9968H12.997H12.9972H12.9974H12.9976H12.9977H12.9979H12.9981H12.9983H12.9985H12.9986H12.9988H12.999H12.9992H12.9994H12.9996H12.9997H12.9999H13.0001H13.0003H13.0005H13.0006H13.0008H13.001H13.0012H13.0014H13.0015H13.0017H13.0019H13.0021H13.0023H13.0024H13.0026H13.0028C13.1046 19.2366 13.188 19.2063 13.2547 19.1821C13.2693 19.1768 13.283 19.1718 13.296 19.1674ZM15 3.85C8.86408 3.85 3.85 8.86408 3.85 15C3.85 21.1359 8.86408 26.15 15 26.15C21.1359 26.15 26.15 21.1359 26.15 15C26.15 8.86408 21.1359 3.85 15 3.85ZM15 24.6824C9.67472 24.6824 5.3176 20.3554 5.3176 15C5.3176 9.67472 9.6446 5.3176 15 5.3176C20.3253 5.3176 24.6824 9.6446 24.6824 15C24.6824 20.325 20.325 24.6824 15 24.6824Z"
                    fill="#ff2d62"
                    stroke="#ff2d62"
                    stroke-width="0.3"
                  ></path>
                </svg>
              </button>
              <button className="ml-1.5 h-10 w-10 flex items-center justify-center rounded-xl hover:bg-appcolor">
                <svg
                  fill="#ff2d62"
                  height="20"
                  stroke-width="0"
                  width="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.10526 12.2105C4.26797 12.2105 5.21053 11.268 5.21053 10.1053C5.21053 8.94256 4.26797 8 3.10526 8C1.94256 8 1 8.94256 1 10.1053C1 11.268 1.94256 12.2105 3.10526 12.2105Z"
                    fill-rule="#ff2d62"
                  ></path>
                  <path
                    d="M10 12.2105C11.1627 12.2105 12.1053 11.268 12.1053 10.1053C12.1053 8.94256 11.1627 8 10 8C8.8373 8 7.89474 8.94256 7.89474 10.1053C7.89474 11.268 8.8373 12.2105 10 12.2105Z"
                    fill-rule="#ff2d62"
                  ></path>
                  <path
                    d="M16.8947 12.2105C18.0574 12.2105 19 11.268 19 10.1053C19 8.94256 18.0574 8 16.8947 8C15.732 8 14.7895 8.94256 14.7895 10.1053C14.7895 11.268 15.732 12.2105 16.8947 12.2105Z"
                    fill-rule="#ff2d62"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hover:bg-[#1c1f21]">
          <div className="py-[14px] px-4 flex justify-between">
            <div className="flex ">
              <button
                type="button"
                className="h-[50px] w-[50px] text-[26px] rounded-lg mr-5 flex items-center justify-center text-light-gray bg-applight"
              >
                🚀
              </button>
              <div>
                <p className="text-[17px] font-medium text-[#E5E5E5]">
                  Untitled
                </p>
                <div className="flex items-center mt-0.5 gap-1">
                  <button
                    type="button"
                    className="px-2 h-6 flex items-center justify-center gap-0.5 border border-dark-charcoal hover:border-slate-gray text-[#E5E5E5] rounded-full bg-[#1e1f23]"
                  >
                    <svg
                      className="text-[#E5E5E5]"
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="#E5E5E5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 8H14M3.33333 4H12.6667C13.403 4 14 4.59695 14 5.33333V14.6667C14 15.403 13.403 16 12.6667 16H3.33333C2.59695 16 2 15.403 2 14.6667V5.33333C2 4.59695 2.59695 4 3.33333 4Z"
                        stroke="#333333"
                        stroke-width="1.44689"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span>Due Date</span>
                  </button>
                  <button
                    type="button"
                    className="px-2 h-6 flex items-center justify-center gap-0.5 border border-dark-charcoal hover:border-slate-gray text-[#E5E5E5] rounded-full bg-[#1e1f23]"
                  >
                    <svg
                      width="14"
                      height="20"
                      viewBox="0 0 14 20"
                      fill="#E5E5E5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.6667 16V14.6667C12.6667 13.9594 12.3857 13.2811 11.8856 12.781C11.3855 12.281 10.7072 12 10 12H4.66667C3.95942 12 3.28115 12.281 2.78105 12.781C2.28095 13.2811 2 13.9594 2 14.6667V16M9.99935 6.66667C9.99935 8.13943 8.80544 9.33333 7.33268 9.33333C5.85992 9.33333 4.66602 8.13943 4.66602 6.66667C4.66602 5.19391 5.85992 4 7.33268 4C8.80544 4 9.99935 5.19391 9.99935 6.66667Z"
                        stroke="#333333"
                        stroke-width="1.44689"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span>Assign</span>
                  </button>
                  <button
                    type="button"
                    className="px-2 h-6 flex items-center justify-center gap-0.5 border border-dark-charcoal hover:border-slate-gray text-[#E5E5E5] rounded-full bg-[#1e1f23]"
                  >
                    <PlusIcon />
                    <span>Tag</span>
                  </button>
                  <button
                    type="button"
                    className="px-2 h-6 flex items-center justify-center gap-0.5 border border-dark-charcoal hover:border-slate-gray text-[#E5E5E5] rounded-full bg-[#1e1f23]"
                  >
                    <AutoIcon />
                    <span>Automate</span>
                  </button>
                  <span className="text-sm text-[#666666]">
                    28 minutes ago by ma6530028
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button className="size-10  flex items-center justify-center rounded-xl hover:bg-appcolor">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="#ff2d62"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.296 19.1674L13.3062 19.1641L13.3157 19.1593C13.399 19.1176 13.445 19.0717 13.5031 19.0135L13.5083 19.0083L20.4832 12.0334C20.6234 11.8932 20.6884 11.699 20.6884 11.5126C20.6884 11.3261 20.6234 11.1319 20.4832 10.9917C20.2035 10.7121 19.7375 10.7233 19.4384 11.0561L13.0028 17.4918L10.5586 15.0476C10.4183 14.9073 10.2242 14.8423 10.0377 14.8423C9.85125 14.8423 9.65707 14.9073 9.51684 15.0476C9.3766 15.1878 9.31159 15.382 9.31159 15.5684C9.31159 15.7549 9.3766 15.9491 9.51684 16.0893L12.4666 19.039C12.5883 19.1607 12.7134 19.1996 12.8435 19.2321L12.8614 19.2366H12.8799H12.8802H12.8806H12.881H12.8813H12.8817H12.882H12.8824H12.8827H12.8831H12.8835H12.8838H12.8842H12.8845H12.8849H12.8852H12.8856H12.8859H12.8863H12.8866H12.887H12.8873H12.8876H12.888H12.8883H12.8887H12.889H12.8894H12.8897H12.89H12.8904H12.8907H12.8911H12.8914H12.8917H12.8921H12.8924H12.8927H12.8931H12.8934H12.8937H12.8941H12.8944H12.8947H12.8951H12.8954H12.8957H12.8961H12.8964H12.8967H12.897H12.8974H12.8977H12.898H12.8983H12.8987H12.899H12.8993H12.8996H12.9H12.9003H12.9006H12.9009H12.9012H12.9016H12.9019H12.9022H12.9025H12.9028H12.9031H12.9034H12.9038H12.9041H12.9044H12.9047H12.905H12.9053H12.9056H12.9059H12.9063H12.9066H12.9069H12.9072H12.9075H12.9078H12.9081H12.9084H12.9087H12.909H12.9093H12.9096H12.9099H12.9102H12.9105H12.9108H12.9111H12.9114H12.9117H12.912H12.9123H12.9126H12.9129H12.9132H12.9135H12.9138H12.9141H12.9144H12.9147H12.915H12.9153H12.9155H12.9158H12.9161H12.9164H12.9167H12.917H12.9173H12.9176H12.9179H12.9181H12.9184H12.9187H12.919H12.9193H12.9196H12.9199H12.9201H12.9204H12.9207H12.921H12.9213H12.9215H12.9218H12.9221H12.9224H12.9227H12.9229H12.9232H12.9235H12.9238H12.924H12.9243H12.9246H12.9249H12.9251H12.9254H12.9257H12.9259H12.9262H12.9265H12.9268H12.927H12.9273H12.9276H12.9278H12.9281H12.9284H12.9286H12.9289H12.9292H12.9294H12.9297H12.93H12.9302H12.9305H12.9308H12.931H12.9313H12.9315H12.9318H12.9321H12.9323H12.9326H12.9328H12.9331H12.9334H12.9336H12.9339H12.9341H12.9344H12.9346H12.9349H12.9352H12.9354H12.9357H12.9359H12.9362H12.9364H12.9367H12.9369H12.9372H12.9374H12.9377H12.9379H12.9382H12.9384H12.9387H12.9389H12.9392H12.9394H12.9397H12.9399H12.9402H12.9404H12.9407H12.9409H12.9411H12.9414H12.9416H12.9419H12.9421H12.9424H12.9426H12.9428H12.9431H12.9433H12.9436H12.9438H12.944H12.9443H12.9445H12.9448H12.945H12.9452H12.9455H12.9457H12.9459H12.9462H12.9464H12.9467H12.9469H12.9471H12.9474H12.9476H12.9478H12.9481H12.9483H12.9485H12.9488H12.949H12.9492H12.9494H12.9497H12.9499H12.9501H12.9504H12.9506H12.9508H12.9511H12.9513H12.9515H12.9517H12.952H12.9522H12.9524H12.9526H12.9529H12.9531H12.9533H12.9535H12.9538H12.954H12.9542H12.9544H12.9547H12.9549H12.9551H12.9553H12.9555H12.9558H12.956H12.9562H12.9564H12.9566H12.9569H12.9571H12.9573H12.9575H12.9577H12.9579H12.9582H12.9584H12.9586H12.9588H12.959H12.9592H12.9595H12.9597H12.9599H12.9601H12.9603H12.9605H12.9607H12.961H12.9612H12.9614H12.9616H12.9618H12.962H12.9622H12.9624H12.9627H12.9629H12.9631H12.9633H12.9635H12.9637H12.9639H12.9641H12.9643H12.9645H12.9647H12.965H12.9652H12.9654H12.9656H12.9658H12.966H12.9662H12.9664H12.9666H12.9668H12.967H12.9672H12.9674H12.9676H12.9678H12.968H12.9682H12.9684H12.9686H12.9688H12.9691H12.9693H12.9695H12.9697H12.9699H12.9701H12.9703H12.9705H12.9707H12.9709H12.9711H12.9713H12.9715H12.9717H12.9719H12.9721H12.9723H12.9725H12.9727H12.9729H12.9731H12.9732H12.9734H12.9736H12.9738H12.974H12.9742H12.9744H12.9746H12.9748H12.975H12.9752H12.9754H12.9756H12.9758H12.976H12.9762H12.9764H12.9766H12.9768H12.977H12.9772H12.9773H12.9775H12.9777H12.9779H12.9781H12.9783H12.9785H12.9787H12.9789H12.9791H12.9793H12.9795H12.9797H12.9798H12.98H12.9802H12.9804H12.9806H12.9808H12.981H12.9812H12.9814H12.9816H12.9817H12.9819H12.9821H12.9823H12.9825H12.9827H12.9829H12.9831H12.9832H12.9834H12.9836H12.9838H12.984H12.9842H12.9844H12.9846H12.9847H12.9849H12.9851H12.9853H12.9855H12.9857H12.9859H12.9861H12.9862H12.9864H12.9866H12.9868H12.987H12.9872H12.9873H12.9875H12.9877H12.9879H12.9881H12.9883H12.9885H12.9886H12.9888H12.989H12.9892H12.9894H12.9896H12.9897H12.9899H12.9901H12.9903H12.9905H12.9907H12.9908H12.991H12.9912H12.9914H12.9916H12.9918H12.9919H12.9921H12.9923H12.9925H12.9927H12.9929H12.993H12.9932H12.9934H12.9936H12.9938H12.9939H12.9941H12.9943H12.9945H12.9947H12.9949H12.995H12.9952H12.9954H12.9956H12.9958H12.9959H12.9961H12.9963H12.9965H12.9967H12.9968H12.997H12.9972H12.9974H12.9976H12.9977H12.9979H12.9981H12.9983H12.9985H12.9986H12.9988H12.999H12.9992H12.9994H12.9996H12.9997H12.9999H13.0001H13.0003H13.0005H13.0006H13.0008H13.001H13.0012H13.0014H13.0015H13.0017H13.0019H13.0021H13.0023H13.0024H13.0026H13.0028C13.1046 19.2366 13.188 19.2063 13.2547 19.1821C13.2693 19.1768 13.283 19.1718 13.296 19.1674ZM15 3.85C8.86408 3.85 3.85 8.86408 3.85 15C3.85 21.1359 8.86408 26.15 15 26.15C21.1359 26.15 26.15 21.1359 26.15 15C26.15 8.86408 21.1359 3.85 15 3.85ZM15 24.6824C9.67472 24.6824 5.3176 20.3554 5.3176 15C5.3176 9.67472 9.6446 5.3176 15 5.3176C20.3253 5.3176 24.6824 9.6446 24.6824 15C24.6824 20.325 20.325 24.6824 15 24.6824Z"
                    fill="#ff2d62"
                    stroke="#ff2d62"
                    stroke-width="0.3"
                  ></path>
                </svg>
              </button>
              <button className="ml-1.5 h-10 w-10 flex items-center justify-center rounded-xl hover:bg-appcolor">
                <svg
                  fill="#ff2d62"
                  height="20"
                  stroke-width="0"
                  width="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.10526 12.2105C4.26797 12.2105 5.21053 11.268 5.21053 10.1053C5.21053 8.94256 4.26797 8 3.10526 8C1.94256 8 1 8.94256 1 10.1053C1 11.268 1.94256 12.2105 3.10526 12.2105Z"
                    fill-rule="#ff2d62"
                  ></path>
                  <path
                    d="M10 12.2105C11.1627 12.2105 12.1053 11.268 12.1053 10.1053C12.1053 8.94256 11.1627 8 10 8C8.8373 8 7.89474 8.94256 7.89474 10.1053C7.89474 11.268 8.8373 12.2105 10 12.2105Z"
                    fill-rule="#ff2d62"
                  ></path>
                  <path
                    d="M16.8947 12.2105C18.0574 12.2105 19 11.268 19 10.1053C19 8.94256 18.0574 8 16.8947 8C15.732 8 14.7895 8.94256 14.7895 10.1053C14.7895 11.268 15.732 12.2105 16.8947 12.2105Z"
                    fill-rule="#ff2d62"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectContent;
