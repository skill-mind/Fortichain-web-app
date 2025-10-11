import { Abi } from "starknet";

export const FORTICHAINABI: Abi = [
  {
    type: "impl",
    name: "FortichainImpl",
    interface_name:
      "fortichain_contracts::interfaces::IFortichain::IFortichain",
  },
  {
    type: "struct",
    name: "core::byte_array::ByteArray",
    members: [
      {
        name: "data",
        type: "core::array::Array::<core::bytes_31::bytes31>",
      },
      {
        name: "pending_word",
        type: "core::felt252",
      },
      {
        name: "pending_word_len",
        type: "core::integer::u32",
      },
    ],
  },
  {
    type: "struct",
    name: "core::integer::u256",
    members: [
      {
        name: "low",
        type: "core::integer::u128",
      },
      {
        name: "high",
        type: "core::integer::u128",
      },
    ],
  },
  {
    type: "enum",
    name: "core::bool",
    variants: [
      {
        name: "False",
        type: "()",
      },
      {
        name: "True",
        type: "()",
      },
    ],
  },
  {
    type: "struct",
    name: "fortichain_contracts::base::types::Project",
    members: [
      {
        name: "id",
        type: "core::integer::u256",
      },
      {
        name: "name",
        type: "core::byte_array::ByteArray",
      },
      {
        name: "description",
        type: "core::byte_array::ByteArray",
      },
      {
        name: "project_type",
        type: "core::byte_array::ByteArray",
      },
      {
        name: "project_owner",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "smart_contract_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "repository_url",
        type: "core::byte_array::ByteArray",
      },
      {
        name: "priority",
        type: "core::felt252",
      },
      {
        name: "is_active",
        type: "core::bool",
      },
      {
        name: "is_completed",
        type: "core::bool",
      },
      {
        name: "created_at",
        type: "core::integer::u64",
      },
      {
        name: "updated_at",
        type: "core::integer::u64",
      },
      {
        name: "deadline",
        type: "core::integer::u64",
      },
      {
        name: "validator_assigned",
        type: "core::bool",
      },
      {
        name: "validator_paid",
        type: "core::bool",
      },
      {
        name: "researchers_paid",
        type: "core::bool",
      },
      {
        name: "amount",
        type: "core::integer::u256",
      },
    ],
  },
  {
    type: "struct",
    name: "fortichain_contracts::base::types::Validator",
    members: [
      {
        name: "id",
        type: "core::integer::u256",
      },
      {
        name: "validator_data_uri",
        type: "core::byte_array::ByteArray",
      },
      {
        name: "validator_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "created_at",
        type: "core::integer::u64",
      },
      {
        name: "updated_at",
        type: "core::integer::u64",
      },
      {
        name: "status",
        type: "core::felt252",
      },
      {
        name: "kyc_uri",
        type: "core::byte_array::ByteArray",
      },
      {
        name: "kyc_approved",
        type: "core::bool",
      },
      {
        name: "username",
        type: "core::byte_array::ByteArray",
      },
      {
        name: "github_profile_url",
        type: "core::byte_array::ByteArray",
      },
      {
        name: "is_open_for_work",
        type: "core::bool",
      },
      {
        name: "reputation",
        type: "core::integer::u256",
      },
      {
        name: "number_project_validated",
        type: "core::integer::u256",
      },
      {
        name: "approval_rate",
        type: "core::integer::u256",
      },
      {
        name: "total_bounty_won",
        type: "core::integer::u256",
      },
      {
        name: "total_amount_withdrawn",
        type: "core::integer::u256",
      },
      {
        name: "available_amount_to_withdraw",
        type: "core::integer::u256",
      },
      {
        name: "reports_submitted_count",
        type: "core::integer::u256",
      },
      {
        name: "reports_approved_count",
        type: "core::integer::u256",
      },
    ],
  },
  {
    type: "struct",
    name: "fortichain_contracts::base::types::SecurityResearcher",
    members: [
      {
        name: "id",
        type: "core::integer::u256",
      },
      {
        name: "researcher_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "username",
        type: "core::byte_array::ByteArray",
      },
      {
        name: "created_at",
        type: "core::integer::u64",
      },
      {
        name: "updated_at",
        type: "core::integer::u64",
      },
      {
        name: "status",
        type: "core::felt252",
      },
      {
        name: "is_active",
        type: "core::bool",
      },
      {
        name: "reputation",
        type: "core::integer::u256",
      },
      {
        name: "total_projects_worked_on",
        type: "core::integer::u256",
      },
      {
        name: "vulnerability",
        type: "core::integer::u256",
      },
      {
        name: "reports_submitted_count",
        type: "core::integer::u256",
      },
      {
        name: "reports_approved_count",
        type: "core::integer::u256",
      },
      {
        name: "total_bounty_won",
        type: "core::integer::u256",
      },
      {
        name: "total_amount_withdrawn",
        type: "core::integer::u256",
      },
      {
        name: "available_amount_to_withdraw",
        type: "core::integer::u256",
      },
    ],
  },
  {
    type: "struct",
    name: "fortichain_contracts::base::types::ProjectOwner",
    members: [
      {
        name: "address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "total_allocated_bounty",
        type: "core::integer::u256",
      },
      {
        name: "in_progress_audits",
        type: "core::integer::u256",
      },
      {
        name: "completed_audits",
        type: "core::integer::u256",
      },
      {
        name: "active_researchers",
        type: "core::integer::u256",
      },
    ],
  },
  {
    type: "struct",
    name: "fortichain_contracts::base::types::Report",
    members: [
      {
        name: "id",
        type: "core::integer::u256",
      },
      {
        name: "title",
        type: "core::byte_array::ByteArray",
      },
      {
        name: "description",
        type: "core::byte_array::ByteArray",
      },
      {
        name: "category",
        type: "core::byte_array::ByteArray",
      },
      {
        name: "severity_level",
        type: "core::byte_array::ByteArray",
      },
      {
        name: "potential_risk",
        type: "core::byte_array::ByteArray",
      },
      {
        name: "recommendation",
        type: "core::byte_array::ByteArray",
      },
      {
        name: "researcher_address",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "project_id",
        type: "core::integer::u256",
      },
      {
        name: "status",
        type: "core::felt252",
      },
      {
        name: "validation_status",
        type: "core::byte_array::ByteArray",
      },
      {
        name: "validator_report_id",
        type: "core::integer::u256",
      },
      {
        name: "created_at",
        type: "core::integer::u64",
      },
      {
        name: "updated_at",
        type: "core::integer::u64",
      },
    ],
  },
  {
    type: "struct",
    name: "fortichain_contracts::base::types::ValidatorValidation",
    members: [
      {
        name: "report_id",
        type: "core::integer::u256",
      },
      {
        name: "validator",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "is_valid",
        type: "core::bool",
      },
      {
        name: "reason",
        type: "core::byte_array::ByteArray",
      },
      {
        name: "validated_at",
        type: "core::integer::u64",
      },
    ],
  },
  {
    type: "enum",
    name: "core::option::Option::<fortichain_contracts::base::types::ValidatorValidation>",
    variants: [
      {
        name: "Some",
        type: "fortichain_contracts::base::types::ValidatorValidation",
      },
      {
        name: "None",
        type: "()",
      },
    ],
  },
  {
    type: "struct",
    name: "fortichain_contracts::base::types::ValidatorVoteOnValidation",
    members: [
      {
        name: "report_id",
        type: "core::integer::u256",
      },
      {
        name: "voter",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "agrees_with_validation",
        type: "core::bool",
      },
      {
        name: "reason",
        type: "core::byte_array::ByteArray",
      },
      {
        name: "voted_at",
        type: "core::integer::u64",
      },
    ],
  },
  {
    type: "interface",
    name: "fortichain_contracts::interfaces::IFortichain::IFortichain",
    items: [
      {
        type: "function",
        name: "upload_project",
        inputs: [
          {
            name: "name",
            type: "core::byte_array::ByteArray",
          },
          {
            name: "description",
            type: "core::byte_array::ByteArray",
          },
          {
            name: "project_type",
            type: "core::byte_array::ByteArray",
          },
          {
            name: "deadline",
            type: "core::integer::u64",
          },
          {
            name: "repository_url",
            type: "core::byte_array::ByteArray",
          },
          {
            name: "priority",
            type: "core::felt252",
          },
          {
            name: "smart_contract_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "amount",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "edit_project",
        inputs: [
          {
            name: "project_id",
            type: "core::integer::u256",
          },
          {
            name: "description",
            type: "core::byte_array::ByteArray",
          },
          {
            name: "repository_url",
            type: "core::byte_array::ByteArray",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "create_security_researcher",
        inputs: [
          {
            name: "researcher_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "username",
            type: "core::byte_array::ByteArray",
          },
        ],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "write_report",
        inputs: [
          {
            name: "project_id",
            type: "core::integer::u256",
          },
          {
            name: "title",
            type: "core::byte_array::ByteArray",
          },
          {
            name: "description",
            type: "core::byte_array::ByteArray",
          },
          {
            name: "category",
            type: "core::byte_array::ByteArray",
          },
          {
            name: "severity_level",
            type: "core::byte_array::ByteArray",
          },
          {
            name: "potential_risk",
            type: "core::byte_array::ByteArray",
          },
          {
            name: "recommendation",
            type: "core::byte_array::ByteArray",
          },
        ],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "create_validator",
        inputs: [
          {
            name: "validator_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
          {
            name: "username",
            type: "core::byte_array::ByteArray",
          },
          {
            name: "github_profile_url",
            type: "core::byte_array::ByteArray",
          },
          {
            name: "pass_work",
            type: "core::array::Array::<core::byte_array::ByteArray>",
          },
        ],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "approve_validator",
        inputs: [
          {
            name: "validator_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "assign_validator",
        inputs: [
          {
            name: "project_id",
            type: "core::integer::u256",
          },
          {
            name: "validator_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "upgrade",
        inputs: [
          {
            name: "new_class_hash",
            type: "core::starknet::class_hash::ClassHash",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "validate_report",
        inputs: [
          {
            name: "report_id",
            type: "core::integer::u256",
          },
          {
            name: "status",
            type: "core::byte_array::ByteArray",
          },
          {
            name: "severity_level_confirmation",
            type: "core::byte_array::ByteArray",
          },
          {
            name: "category_confirmation",
            type: "core::byte_array::ByteArray",
          },
          {
            name: "reason",
            type: "core::byte_array::ByteArray",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "vote_on_validation",
        inputs: [
          {
            name: "report_id",
            type: "core::integer::u256",
          },
          {
            name: "agrees_with_validation",
            type: "core::bool",
          },
          {
            name: "reason",
            type: "core::byte_array::ByteArray",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "view_project",
        inputs: [
          {
            name: "project_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "fortichain_contracts::base::types::Project",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "is_validator",
        inputs: [
          {
            name: "address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_assigned_project_validator",
        inputs: [
          {
            name: "project_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "fortichain_contracts::base::types::Validator",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_validator",
        inputs: [
          {
            name: "validator_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "(fortichain_contracts::base::types::Validator, core::array::Array::<core::byte_array::ByteArray>)",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_user_projects",
        inputs: [
          {
            name: "user",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::array::Array::<fortichain_contracts::base::types::Project>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_all_projects",
        inputs: [],
        outputs: [
          {
            type: "core::array::Array::<fortichain_contracts::base::types::Project>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_all_validators",
        inputs: [],
        outputs: [
          {
            type: "core::array::Array::<fortichain_contracts::base::types::Validator>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_projects_audited_by_validator",
        inputs: [
          {
            name: "validator",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::array::Array::<fortichain_contracts::base::types::Project>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_all_researchers",
        inputs: [],
        outputs: [
          {
            type: "core::array::Array::<core::starknet::contract_address::ContractAddress>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_security_researcher",
        inputs: [
          {
            name: "researcher_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "(core::integer::u256, fortichain_contracts::base::types::SecurityResearcher)",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_security_researchers",
        inputs: [],
        outputs: [
          {
            type: "core::array::Array::<core::starknet::contract_address::ContractAddress>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_all_researchers_detailed",
        inputs: [],
        outputs: [
          {
            type: "core::array::Array::<fortichain_contracts::base::types::SecurityResearcher>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_researcher_by_address",
        inputs: [
          {
            name: "researcher_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "fortichain_contracts::base::types::SecurityResearcher",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_assigned_projects_for_validator",
        inputs: [
          {
            name: "validator",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::array::Array::<fortichain_contracts::base::types::Project>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_assignable_projects",
        inputs: [],
        outputs: [
          {
            type: "core::array::Array::<fortichain_contracts::base::types::Project>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_project_owner",
        inputs: [
          {
            name: "owner",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "fortichain_contracts::base::types::ProjectOwner",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_researchers_on_project",
        inputs: [
          {
            name: "project_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::array::Array::<fortichain_contracts::base::types::SecurityResearcher>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "has_researcher_submitted_report",
        inputs: [
          {
            name: "project_id",
            type: "core::integer::u256",
          },
          {
            name: "researcher_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_all_reports_on_project",
        inputs: [
          {
            name: "project_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::array::Array::<fortichain_contracts::base::types::Report>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "has_validator_report",
        inputs: [
          {
            name: "report_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_researcher_projects_worked_on",
        inputs: [
          {
            name: "researcher_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::array::Array::<fortichain_contracts::base::types::Project>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_pending_reports_for_validation",
        inputs: [
          {
            name: "project_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::array::Array::<fortichain_contracts::base::types::Report>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_validator_projects_worked_on",
        inputs: [
          {
            name: "validator_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::array::Array::<fortichain_contracts::base::types::Project>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_report_validation",
        inputs: [
          {
            name: "report_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::option::Option::<fortichain_contracts::base::types::ValidatorValidation>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_validation_votes",
        inputs: [
          {
            name: "report_id",
            type: "core::integer::u256",
          },
        ],
        outputs: [
          {
            type: "core::array::Array::<fortichain_contracts::base::types::ValidatorVoteOnValidation>",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "has_validator_voted_on_validation",
        inputs: [
          {
            name: "report_id",
            type: "core::integer::u256",
          },
          {
            name: "validator_address",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    type: "impl",
    name: "OwnableImpl",
    interface_name: "openzeppelin_access::ownable::interface::IOwnable",
  },
  {
    type: "interface",
    name: "openzeppelin_access::ownable::interface::IOwnable",
    items: [
      {
        type: "function",
        name: "owner",
        inputs: [],
        outputs: [
          {
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "transfer_ownership",
        inputs: [
          {
            name: "new_owner",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "renounce_ownership",
        inputs: [],
        outputs: [],
        state_mutability: "external",
      },
    ],
  },
  {
    type: "impl",
    name: "SRC5Impl",
    interface_name: "openzeppelin_introspection::interface::ISRC5",
  },
  {
    type: "interface",
    name: "openzeppelin_introspection::interface::ISRC5",
    items: [
      {
        type: "function",
        name: "supports_interface",
        inputs: [
          {
            name: "interface_id",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    type: "impl",
    name: "AccessControlImpl",
    interface_name:
      "openzeppelin_access::accesscontrol::interface::IAccessControl",
  },
  {
    type: "interface",
    name: "openzeppelin_access::accesscontrol::interface::IAccessControl",
    items: [
      {
        type: "function",
        name: "has_role",
        inputs: [
          {
            name: "role",
            type: "core::felt252",
          },
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [
          {
            type: "core::bool",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "get_role_admin",
        inputs: [
          {
            name: "role",
            type: "core::felt252",
          },
        ],
        outputs: [
          {
            type: "core::felt252",
          },
        ],
        state_mutability: "view",
      },
      {
        type: "function",
        name: "grant_role",
        inputs: [
          {
            name: "role",
            type: "core::felt252",
          },
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "revoke_role",
        inputs: [
          {
            name: "role",
            type: "core::felt252",
          },
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "renounce_role",
        inputs: [
          {
            name: "role",
            type: "core::felt252",
          },
          {
            name: "account",
            type: "core::starknet::contract_address::ContractAddress",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
    ],
  },
  {
    type: "constructor",
    name: "constructor",
    inputs: [
      {
        name: "erc20",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "owner",
        type: "core::starknet::contract_address::ContractAddress",
      },
      {
        name: "revenue_account",
        type: "core::starknet::contract_address::ContractAddress",
      },
    ],
  },
  {
    type: "event",
    name: "fortichain_contracts::fortichain::Fortichain::ProjectCreated",
    kind: "struct",
    members: [
      {
        name: "project_id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "project_owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "created_at",
        type: "core::integer::u64",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "fortichain_contracts::fortichain::Fortichain::ProjectCreatedWithEscrow",
    kind: "struct",
    members: [
      {
        name: "project_id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "project_name",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "project_description",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "project_type",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "project_owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "smart_contract_address",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "repository_url",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "priority",
        type: "core::felt252",
        kind: "data",
      },
      {
        name: "deadline",
        type: "core::integer::u64",
        kind: "data",
      },
      {
        name: "total_amount",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "escrow_id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "total_deposit",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "researcher_share",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "assigned_validator_share",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "voting_validators_share",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "fortichain_revenue",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "created_at",
        type: "core::integer::u64",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "fortichain_contracts::fortichain::Fortichain::ProjectClosed",
    kind: "struct",
    members: [
      {
        name: "project_id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "project_owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "closed_at",
        type: "core::integer::u64",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "fortichain_contracts::fortichain::Fortichain::ProjectEdited",
    kind: "struct",
    members: [
      {
        name: "project_id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "project_name",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "project_description",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "project_type",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "project_owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "smart_contract_address",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "repository_url",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "priority",
        type: "core::felt252",
        kind: "data",
      },
      {
        name: "deadline",
        type: "core::integer::u64",
        kind: "data",
      },
      {
        name: "is_active",
        type: "core::bool",
        kind: "data",
      },
      {
        name: "is_completed",
        type: "core::bool",
        kind: "data",
      },
      {
        name: "created_at",
        type: "core::integer::u64",
        kind: "data",
      },
      {
        name: "updated_at",
        type: "core::integer::u64",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "fortichain_contracts::fortichain::Fortichain::EscrowCreated",
    kind: "struct",
    members: [
      {
        name: "escrow_id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "amount",
        type: "core::integer::u256",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "fortichain_contracts::fortichain::Fortichain::ReportSubmitted",
    kind: "struct",
    members: [
      {
        name: "report_id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "title",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "description",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "category",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "severity_level",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "potential_risk",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "recommendation",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "researcher_address",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "project_id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "status",
        type: "core::felt252",
        kind: "data",
      },
      {
        name: "validation_status",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "validator_report_id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "created_at",
        type: "core::integer::u64",
        kind: "data",
      },
      {
        name: "updated_at",
        type: "core::integer::u64",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "fortichain_contracts::fortichain::Fortichain::ReportUpdated",
    kind: "struct",
    members: [
      {
        name: "report_id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "project_id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "timestamp",
        type: "core::integer::u64",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "fortichain_contracts::fortichain::Fortichain::ReportReviewed",
    kind: "struct",
    members: [
      {
        name: "report_id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "project_id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "validator",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "accepted",
        type: "core::bool",
        kind: "data",
      },
      {
        name: "timestamp",
        type: "core::integer::u64",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "fortichain_contracts::fortichain::Fortichain::ValidatorBountyWithdrawn",
    kind: "struct",
    members: [
      {
        name: "validator",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "recipient",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "amount",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "timestamp",
        type: "core::integer::u64",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "fortichain_contracts::fortichain::Fortichain::ResearcherBountyWithdrawn",
    kind: "struct",
    members: [
      {
        name: "researcher",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "recipient",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "amount",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "timestamp",
        type: "core::integer::u64",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "fortichain_contracts::fortichain::Fortichain::ValidatorValidatedReport",
    kind: "struct",
    members: [
      {
        name: "report_id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "project_id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "validator",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "validator_id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "researcher_address",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "is_valid",
        type: "core::bool",
        kind: "data",
      },
      {
        name: "validation_status",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "severity_level_confirmation",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "category_confirmation",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "reason",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "validated_at",
        type: "core::integer::u64",
        kind: "data",
      },
      {
        name: "report_status",
        type: "core::felt252",
        kind: "data",
      },
      {
        name: "report_updated_at",
        type: "core::integer::u64",
        kind: "data",
      },
      {
        name: "researcher_payment",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "researcher_total_bounty",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "researcher_available_to_withdraw",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "researcher_reports_approved_count",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "validator_payment",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "validator_total_bounty",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "validator_available_to_withdraw",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "validator_approval_rate",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "validator_reputation",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "validator_reports_reviewed",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "validator_reports_approved",
        type: "core::integer::u256",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "fortichain_contracts::fortichain::Fortichain::ValidatorVotedOnValidation",
    kind: "struct",
    members: [
      {
        name: "report_id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "project_id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "voter",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "voter_id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "agrees_with_validation",
        type: "core::bool",
        kind: "data",
      },
      {
        name: "reason",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "voted_at",
        type: "core::integer::u64",
        kind: "data",
      },
      {
        name: "voting_share_allocated",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "validator_total_bounty_won",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "validator_available_to_withdraw",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "validator_reputation",
        type: "core::integer::u256",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "fortichain_contracts::fortichain::Fortichain::SecurityResearcherCreated",
    kind: "struct",
    members: [
      {
        name: "researcher_id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "researcher_address",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "username",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "created_at",
        type: "core::integer::u64",
        kind: "data",
      },
      {
        name: "updated_at",
        type: "core::integer::u64",
        kind: "data",
      },
      {
        name: "status",
        type: "core::felt252",
        kind: "data",
      },
      {
        name: "is_active",
        type: "core::bool",
        kind: "data",
      },
      {
        name: "reputation",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "total_projects_worked_on",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "vulnerability",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "reports_submitted_count",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "reports_approved_count",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "total_bounty_won",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "total_amount_withdrawn",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "available_amount_to_withdraw",
        type: "core::integer::u256",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "fortichain_contracts::fortichain::Fortichain::ValidatorCreated",
    kind: "struct",
    members: [
      {
        name: "validator_id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "validator_data_uri",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "validator_address",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "created_at",
        type: "core::integer::u64",
        kind: "data",
      },
      {
        name: "updated_at",
        type: "core::integer::u64",
        kind: "data",
      },
      {
        name: "status",
        type: "core::felt252",
        kind: "data",
      },
      {
        name: "kyc_uri",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "kyc_approved",
        type: "core::bool",
        kind: "data",
      },
      {
        name: "username",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "github_profile_url",
        type: "core::byte_array::ByteArray",
        kind: "data",
      },
      {
        name: "is_open_for_work",
        type: "core::bool",
        kind: "data",
      },
      {
        name: "reputation",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "number_project_validated",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "approval_rate",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "total_bounty_won",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "total_amount_withdrawn",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "available_amount_to_withdraw",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "reports_submitted_count",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "reports_approved_count",
        type: "core::integer::u256",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "fortichain_contracts::fortichain::Fortichain::ValidatorApproved",
    kind: "struct",
    members: [
      {
        name: "validator_id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "validator_address",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "status",
        type: "core::felt252",
        kind: "data",
      },
      {
        name: "updated_at",
        type: "core::integer::u64",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "fortichain_contracts::fortichain::Fortichain::ValidatorAssignedToProject",
    kind: "struct",
    members: [
      {
        name: "project_id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "validator_id",
        type: "core::integer::u256",
        kind: "data",
      },
      {
        name: "validator_address",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "validator_assigned",
        type: "core::bool",
        kind: "data",
      },
      {
        name: "assigned_at",
        type: "core::integer::u64",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "fortichain_contracts::fortichain::Fortichain::UserSuspended",
    kind: "struct",
    members: [
      {
        name: "user_address",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "suspended_at",
        type: "core::integer::u64",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "fortichain_contracts::fortichain::Fortichain::UserResolved",
    kind: "struct",
    members: [
      {
        name: "user_address",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "resolved_at",
        type: "core::integer::u64",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred",
    kind: "struct",
    members: [
      {
        name: "previous_owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "new_owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
    kind: "struct",
    members: [
      {
        name: "previous_owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
      {
        name: "new_owner",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "key",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin_access::ownable::ownable::OwnableComponent::Event",
    kind: "enum",
    variants: [
      {
        name: "OwnershipTransferred",
        type: "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferred",
        kind: "nested",
      },
      {
        name: "OwnershipTransferStarted",
        type: "openzeppelin_access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
        kind: "nested",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleGranted",
    kind: "struct",
    members: [
      {
        name: "role",
        type: "core::felt252",
        kind: "data",
      },
      {
        name: "account",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "sender",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleGrantedWithDelay",
    kind: "struct",
    members: [
      {
        name: "role",
        type: "core::felt252",
        kind: "data",
      },
      {
        name: "account",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "sender",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "delay",
        type: "core::integer::u64",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleRevoked",
    kind: "struct",
    members: [
      {
        name: "role",
        type: "core::felt252",
        kind: "data",
      },
      {
        name: "account",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
      {
        name: "sender",
        type: "core::starknet::contract_address::ContractAddress",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleAdminChanged",
    kind: "struct",
    members: [
      {
        name: "role",
        type: "core::felt252",
        kind: "data",
      },
      {
        name: "previous_admin_role",
        type: "core::felt252",
        kind: "data",
      },
      {
        name: "new_admin_role",
        type: "core::felt252",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::Event",
    kind: "enum",
    variants: [
      {
        name: "RoleGranted",
        type: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleGranted",
        kind: "nested",
      },
      {
        name: "RoleGrantedWithDelay",
        type: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleGrantedWithDelay",
        kind: "nested",
      },
      {
        name: "RoleRevoked",
        type: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleRevoked",
        kind: "nested",
      },
      {
        name: "RoleAdminChanged",
        type: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::RoleAdminChanged",
        kind: "nested",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin_introspection::src5::SRC5Component::Event",
    kind: "enum",
    variants: [],
  },
  {
    type: "event",
    name: "openzeppelin_upgrades::upgradeable::UpgradeableComponent::Upgraded",
    kind: "struct",
    members: [
      {
        name: "class_hash",
        type: "core::starknet::class_hash::ClassHash",
        kind: "data",
      },
    ],
  },
  {
    type: "event",
    name: "openzeppelin_upgrades::upgradeable::UpgradeableComponent::Event",
    kind: "enum",
    variants: [
      {
        name: "Upgraded",
        type: "openzeppelin_upgrades::upgradeable::UpgradeableComponent::Upgraded",
        kind: "nested",
      },
    ],
  },
  {
    type: "event",
    name: "fortichain_contracts::fortichain::Fortichain::Event",
    kind: "enum",
    variants: [
      {
        name: "ProjectCreated",
        type: "fortichain_contracts::fortichain::Fortichain::ProjectCreated",
        kind: "nested",
      },
      {
        name: "ProjectCreatedWithEscrow",
        type: "fortichain_contracts::fortichain::Fortichain::ProjectCreatedWithEscrow",
        kind: "nested",
      },
      {
        name: "ProjectClosed",
        type: "fortichain_contracts::fortichain::Fortichain::ProjectClosed",
        kind: "nested",
      },
      {
        name: "ProjectEdited",
        type: "fortichain_contracts::fortichain::Fortichain::ProjectEdited",
        kind: "nested",
      },
      {
        name: "EscrowCreated",
        type: "fortichain_contracts::fortichain::Fortichain::EscrowCreated",
        kind: "nested",
      },
      {
        name: "ReportSubmitted",
        type: "fortichain_contracts::fortichain::Fortichain::ReportSubmitted",
        kind: "nested",
      },
      {
        name: "ReportUpdated",
        type: "fortichain_contracts::fortichain::Fortichain::ReportUpdated",
        kind: "nested",
      },
      {
        name: "ReportReviewed",
        type: "fortichain_contracts::fortichain::Fortichain::ReportReviewed",
        kind: "nested",
      },
      {
        name: "ValidatorBountyWithdrawn",
        type: "fortichain_contracts::fortichain::Fortichain::ValidatorBountyWithdrawn",
        kind: "nested",
      },
      {
        name: "ResearcherBountyWithdrawn",
        type: "fortichain_contracts::fortichain::Fortichain::ResearcherBountyWithdrawn",
        kind: "nested",
      },
      {
        name: "ValidatorValidatedReport",
        type: "fortichain_contracts::fortichain::Fortichain::ValidatorValidatedReport",
        kind: "nested",
      },
      {
        name: "ValidatorVotedOnValidation",
        type: "fortichain_contracts::fortichain::Fortichain::ValidatorVotedOnValidation",
        kind: "nested",
      },
      {
        name: "SecurityResearcherCreated",
        type: "fortichain_contracts::fortichain::Fortichain::SecurityResearcherCreated",
        kind: "nested",
      },
      {
        name: "ValidatorCreated",
        type: "fortichain_contracts::fortichain::Fortichain::ValidatorCreated",
        kind: "nested",
      },
      {
        name: "ValidatorApproved",
        type: "fortichain_contracts::fortichain::Fortichain::ValidatorApproved",
        kind: "nested",
      },
      {
        name: "ValidatorAssignedToProject",
        type: "fortichain_contracts::fortichain::Fortichain::ValidatorAssignedToProject",
        kind: "nested",
      },
      {
        name: "UserSuspended",
        type: "fortichain_contracts::fortichain::Fortichain::UserSuspended",
        kind: "nested",
      },
      {
        name: "UserResolved",
        type: "fortichain_contracts::fortichain::Fortichain::UserResolved",
        kind: "nested",
      },
      {
        name: "OwnableEvent",
        type: "openzeppelin_access::ownable::ownable::OwnableComponent::Event",
        kind: "flat",
      },
      {
        name: "AccessControlEvent",
        type: "openzeppelin_access::accesscontrol::accesscontrol::AccessControlComponent::Event",
        kind: "flat",
      },
      {
        name: "SRC5Event",
        type: "openzeppelin_introspection::src5::SRC5Component::Event",
        kind: "flat",
      },
      {
        name: "UpgradeableEvent",
        type: "openzeppelin_upgrades::upgradeable::UpgradeableComponent::Event",
        kind: "flat",
      },
    ],
  },
];
