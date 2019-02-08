import React from 'react'
import {
  Container,
  Section,
  Preheading,
  Btn,
  Title,
} from '../../components'
import { SNOW } from '../../constants/colors'

export default () => (
  <>
    <Section background={SNOW}>
      <Container>
        <Preheading>Mission</Preheading>
        <Title>The problem</Title>

        <p>Almost 80% of Americans live from paycheck to paycheck</p>
        <p>20% of adults are not able to pay their bills on time</p>
        <p>25% of adults skipped necessary medical care in 2017 because they couldn’t afford it</p>
        <p>
          <strong>Our mission is simple:</strong>
          {' We want to help these individuals achieve financial stability by providing them with quick and easy access to reasonably priced loans.'}
        </p>
      </Container>
    </Section>
    <Section>
      <Container>
        <Preheading>Our company</Preheading>
        <Title>About us</Title>
        <p>
          <strong>SalaryMatch</strong>
          {' is an online lending platform that provides personal loans that are automatically deducted from your salary. We partner with your employer to offer their employees a quick and direct access to capital with interest rates up to 60% lower than market alternatives, allowing you to take control of your finances & transforming you from a borrower to a saver.'}
        </p>
        <Btn href="TODO">Apply Now</Btn>
      </Container>
    </Section>
    <Section>
      <Container>
        <Preheading>Purpose</Preheading>
        <Title>Make the most of the good moments in life</Title>

        <ul>
          <li>Take that honeymoon trip you’ve always dreamed of</li>
          <li>Buy the woman of your life the engagement ring she deserves</li>
          <li>Take your family on that overdue vacation</li>
          <li>Improve your home</li>
          <li>Refinance any debts you have</li>
          <li>Cover Medical, Auto or Home bills you didn’t see coming</li>
        </ul>
      </Container>
    </Section>
    <Section>
      <Container>
        <Preheading>Our Process</Preheading>
        <Title>We make it easy</Title>

        <ol>
          <li>
            <strong>Create an Account</strong>
            <br />
            Verify your employment & personal information. It only takes a few minutes.
          </li>
          <li>
            <strong>Hassle-free Online Application</strong>
            <br />
            {'Choose your desired loan amount and with our proprietary model, we help you find the interest rate that best fits your needs'}
          </li>
          <li>
            <strong>Review & Accept</strong>
            <br />
            {'Evaluate and sign your personalized loan terms, including the proposed repayment schedule and total costs.'}
          </li>
          <li>
            <strong>Receive the Funds</strong>
            <br />
            Within 3* business days of applying, you receive the money into your account
          </li>
          <li>
            <strong>Repayment</strong>
            <br />
            {'Each paycycle we will automatically deduct your loan payments from your paycheck, so you don’t have to worry about managing your cash flows.'}
          </li>
        </ol>

        <p>
          {'Best part is: after you apply, your part of the equation is complete. As soon as we approve your loan, we handle the rest!'}
        </p>
      </Container>
    </Section>
  </>
)
