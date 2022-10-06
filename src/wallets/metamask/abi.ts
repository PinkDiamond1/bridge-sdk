export default [
  'function balanceOf(address owner) view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function symbol() view returns (string)',

  'function earned(address account) public view returns (uint256)',
  'function allowance(address owner, address spender) external view returns (uint256)',

  'function totalSupply() public view returns (uint256)',
  'function currentReward() public view returns (uint256)',
  'function lastTimeRewardApplicable() public view returns (uint256)',
  'function rewardPerToken() public view returns (uint256)',

  'function transfer(address to, uint amount) returns (boolean)',
  'function burn(uint256 amount, bytes32 to) returns (boolean)',
  'function approve(address spender, uint256 amount) external returns (bool)',
  'function stake(uint256 amount) external',
  'function withdraw(uint256 amount) external',
  'function getReward() external',
  'function claim(uint256 index, address account, uint256 amount, bytes32[] calldata merkleProof) external',

  'event Transfer(address indexed from, address indexed to, uint amount)',
]
