* [Campaign](#campaign)
  * [SetTokenAddress](#function-settokenaddress)
  * [GetAvailableSeats](#function-getavailableseats)
  * [Name](#function-name)
  * [SetFundingGoal](#function-setfundinggoal)
  * [GetGoal](#function-getgoal)
  * [GetBalance](#function-getbalance)
* [FakeCoin](#fakecoin)
  * [approve](#function-approve)
  * [transferFrom](#function-transferfrom)
  * [deposit](#function-deposit)
  * [balanceOf](#function-balanceof)
  * [transfer](#function-transfer)
  * [Transfer](#event-transfer)
  * [Approval](#event-approval)
* [SafeMath](#safemath)

# Campaign


## *function* SetTokenAddress

Campaign.SetTokenAddress(tokenAdress) `nonpayable` `33a7e739`

> Sets address of the FakeCoin contract

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *address* | tokenAdress | Address of the fakeCoin |


## *function* GetAvailableSeats

Campaign.GetAvailableSeats() `view` `67eef2bc`

> Gets number of seats(enrollable students) of the Campaign



Outputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | availableSeats | number of seats available |

## *function* Name

Campaign.Name() `view` `8052474d`





## *function* SetFundingGoal

Campaign.SetFundingGoal(fundingGoal) `nonpayable` `bb0cf388`

> Sets Campaign goal

Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | fundingGoal | Number of fakeCoins |


## *function* GetGoal

Campaign.GetGoal() `view` `c14cf305`

> Gets Campaign goal



Outputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | fundingGoal | number of fakeCoins |

## *function* GetBalance

Campaign.GetBalance() `view` `f8f8a912`

> Gets Campaign fakeCoin balance



Outputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | balance | number of fakeCoins |

---
# FakeCoin


## *function* approve

FakeCoin.approve(spender, tokens) `nonpayable` `095ea7b3`


Inputs

| **type** | **name** | **description** |
|-|-|-|
| *address* | spender | undefined |
| *uint256* | tokens | undefined |


## *function* transferFrom

FakeCoin.transferFrom(from, to, tokens) `nonpayable` `23b872dd`


Inputs

| **type** | **name** | **description** |
|-|-|-|
| *address* | from | undefined |
| *address* | to | undefined |
| *uint256* | tokens | undefined |


## *function* deposit

FakeCoin.deposit(tokens, to) `nonpayable` `6e553f65`


Inputs

| **type** | **name** | **description** |
|-|-|-|
| *uint256* | tokens | undefined |
| *address* | to | undefined |


## *function* balanceOf

FakeCoin.balanceOf(tokenOwner) `view` `70a08231`


Inputs

| **type** | **name** | **description** |
|-|-|-|
| *address* | tokenOwner | undefined |


## *function* transfer

FakeCoin.transfer(to, tokens) `nonpayable` `a9059cbb`


Inputs

| **type** | **name** | **description** |
|-|-|-|
| *address* | to | undefined |
| *uint256* | tokens | undefined |


## *event* Transfer

FakeCoin.Transfer(from, to, tokens) `ddf252ad`

Arguments

| **type** | **name** | **description** |
|-|-|-|
| *address* | from | indexed |
| *address* | to | indexed |
| *uint256* | tokens | not indexed |

## *event* Approval

FakeCoin.Approval(tokenOwner, spender, tokens) `8c5be1e5`

Arguments

| **type** | **name** | **description** |
|-|-|-|
| *address* | tokenOwner | indexed |
| *address* | spender | indexed |
| *uint256* | tokens | not indexed |


---
# SafeMath


---