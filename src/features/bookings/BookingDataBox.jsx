import styled from "styled-components";
import { format } from "date-fns";

import DataItem from "../../ui/DataItem";
import { Flag } from "../../ui/Flag";
import { formatCurrency } from "../../utils/helpers";

import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";

const BookingDataBox = () => {
  return (
    <StyledBookingDataBox>
      <Header>
        <div>
          <HiOutlineHomeModern />
          <p>
            0 nights in Cabin <span>001</span>
          </p>
        </div>

        <p>dates</p>
      </Header>

      <Section>
        <Guest>
          <Flag src={""} alt={`Flag of USA`} />
          <p>Joe + 2 guests</p>
          <span>&bull;</span>
          <p>email</p>
          <span>&bull;</span>
          <p>National ID {12345}</p>
        </Guest>

        <DataItem
          icon={<HiOutlineChatBubbleBottomCenterText />}
          label="Observations"
        >
          observations
        </DataItem>

        <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included?">
          Yes
        </DataItem>

        <Price isPaid={false}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label="Total price">
            {formatCurrency(0)}
            {formatCurrency(0)} cabin + {formatCurrency(0)} breakfast
          </DataItem>

          <p>Paid</p>
        </Price>
      </Section>

      <Footer>
        <p>Booked {format(new Date(0), "EEE, MMM dd yyyy, p")}</p>
      </Footer>
    </StyledBookingDataBox>
  );
};

const StyledBookingDataBox = styled.section`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`;

const Header = styled.header`
  background-color: var(--color-brand-500);
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-family: "Sono";
    font-size: 2rem;
    margin-left: 4px;
  }
`;

const Section = styled.section`
  padding: 3.2rem 4rem 1.2rem;
`;

const Guest = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${(props) =>
    props.isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};
  color: ${(props) =>
    props.isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }
`;

const Footer = styled.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`;

export default BookingDataBox;
