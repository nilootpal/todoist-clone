import React from "react";
import { render, cleanup, fireEvent } from '@testing-library/react'
import { Checkbox } from '../components/Checkbox'

beforeEach(cleanup); // clean the DOM

jest.mock('../firebase', () => ({
    firebase: {
        
    }
}))